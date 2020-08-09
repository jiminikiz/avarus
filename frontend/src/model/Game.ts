import { Gangs, Sites } from '@/data';

import { Tools } from '@/lib/Tools';
import { Board, BoardTile } from '@/lib/Board';
import { Deck } from '@/lib/Deck';

import { Player } from './Player';
import { Sector, Site } from './Sector';
import { Gang, Debuggers } from './Gang';
import { TurnPhase, Turn } from './Turn';
import { GameEvent, GameEventType, GameEventText, GameEventLogLevel, GameEventShape } from '@/lib/GameEvent';

export enum GameMode {
  Greed = 'Greed',
  Power = 'Power',
  Acceptance = 'Acceptance',
  Dominance = 'Dominance',
  Genocide = 'Genocide',
  Acquisition = 'Acquisition',
  Elimination = 'Elimination',
  Siege = 'Siege',
  Stronghold = 'Stronghold',
  Armageddon = 'Armageddon',
}

export enum GameDifficulty {
  Easy = 'Hood Rat',
  Medium = 'Gangsta',
  Hard = 'Henchman',
  Insane = 'King Pin',
}

export interface GameOptions {
  players: Player[];
  mode: GameMode;
  difficulty: GameDifficulty;
  timeLimit?: number;
  board: {
    rows: number;
    cols: number;
  };
}

export class Game {
  public mode: GameMode;
  public difficulty: GameDifficulty;
  public timeLimit: number = Infinity;

  public board: Board;
  public gangs: Deck;

  public sectors: Map<string, Sector> = new Map();
  public turns: Turn[] = [];
  public phase: TurnPhase = TurnPhase.Upkeep;
  public events: GameEvent[] = [];
  public players: Player[];

  public activePlayerIndex: number = 0;
  public activeTurnIndex: number = 0;

  public get activePlayer(): Player {
    return this.players[this.activePlayerIndex];
  }

  public get activeTurn(): Turn {
    return this.turns[this.activeTurnIndex];
  }

  public get coordinates() {
    return Array.from(this.sectors.keys());
  }

  constructor({
    mode,
    difficulty,
    timeLimit = Infinity,
    players,
    board: { rows, cols },
  }: GameOptions) {
    // TODO: Support dynamic loading here
    this.mode = mode;
    this.players = players;
    this.timeLimit = timeLimit;
    this.difficulty = difficulty;

    this.board = new Board({ rows, cols });
    this.gangs = new Deck({ name: 'Gangs', cards: Gangs });

    this.dealCards(players, this.gangs);
    this.generateSectors();
    this.placeGangs(players);
  }

  public addEvent(event: GameEventShape): void {
    const gameEvent = new GameEvent(event);
    // @ts-ignore
    console[gameEvent.level]('GAME:EVENT', event);
    this.events.push(gameEvent);
  }

  // TODO: End Turn
  // public endTurn() { }

  private dealCards(players: Player[], deck: Deck): void {
    const dealt = deck.deal({ handSize: 3, playerCount: players.length });
    players.forEach(player => player.hand = dealt.pop() as Gang[]);

    this.addEvent({
      type: GameEventType.Deck,
      text: GameEventText.CardsDealt,
    });
  }

  private randomSites(cardinality: number = 3): Site[] {
    return Tools.random.elements(cardinality, Sites) as Site[];
  }

  private generateSector(tile: BoardTile, key: string): void {
    const sites = this.randomSites();
    const sector = new Sector({ ...tile, sites });
    this.sectors.set(key, sector);

    this.addEvent({
      type: GameEventType.Sector,
      text: GameEventText.SectorCreated.replace('{sector}', key),
      level: GameEventLogLevel.debug,
    });
  }

  private generateSectors(): void {
    this.board.tiles.forEach(this.generateSector.bind(this));

    this.addEvent({
      type: GameEventType.Sector,
      text: GameEventText.SectorsCreated,
    });
  }

  private getRandomCoordinates(count: number): string[] {
    return Tools.random.elements(count, this.coordinates);
  }

  private placeGangs(players: Player[]) {
    players.forEach((player: Player) => {
      const { hired, placements } = player;
      const coordinates = this.getRandomCoordinates(1)[0];
      const henchmen = hired.get(Player.henchKey) || Debuggers;
      const sector = this.sectors.get(coordinates);

      if (sector) {
        sector.controlledBy = player;
        this.sectors.set(coordinates, sector);
      }

      return placements.set(coordinates, henchmen);
    });

    this.addEvent({
      type: GameEventType.Gang,
      text: GameEventText.GangsPlaced,
      data: { players },
    });
  }
}
