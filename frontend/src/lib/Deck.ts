import Tools from './Tools';

export interface DeckCard {
  name: string;
  attributes: any;
}

export interface DeckOptions {
  name: string;
  cards: DeckCard[];
}

export interface DealOptions {
  handSize: number;
  playerCount: number;
}

export class Deck {
  public name: string;
  public cards: DeckCard[];

  constructor({ name, cards = [] }: DeckOptions) {
    this.name = name;
    this.cards = [...cards];
    this.shuffle();
  }

  public deal(options: DealOptions): DeckCard[][] {
    const dealOut = [];
    let count = Number(options.playerCount);

    while (count--) {
      dealOut.push(this.draw(options.handSize));
    }

    return dealOut;
  }

  public draw(numberOfCards: number): DeckCard[] {
    return this.cards.splice(0, numberOfCards);
  }

  public discard(cards: DeckCard[]): void {
    this.cards.unshift(...cards);
  }

  public shuffle() {
    Tools.randomize.elements(this.cards);
  }
}
