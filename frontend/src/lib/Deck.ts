import Tools from './Tools';

export interface DeckCard {
  name: string;
  attributes: any;
}

export interface DeckOptions {
  name: string;
  cards: DeckCard[];
}

export class Deck implements DeckOptions {
  public name: string;
  public cards: DeckCard[];

  constructor({ name, cards = [] }: DeckOptions) {
    this.name = name;
    this.cards = [...cards];
  }

  public draw(numberOfCards: number) {
    return this.cards.splice(0, numberOfCards);
  }

  public discard(cards: DeckCard[]): void {
    this.cards.unshift(...cards);
  }

  public shuffle() {
    Tools.randomize.elements(this.cards);
  }
}
