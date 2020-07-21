const Tools = {
  async request(url: string, options: object = {}) {
    const res = await fetch(url, options);
    if (res.json !== undefined) {
      return res.json();
    }
    return res;
  },
  random: {
    enum<T>(anEnum: T): T[keyof T] {
        const enumValues = (Object.values(anEnum) as unknown) as Array<T[keyof T]>;
        const randomIndex = Tools.random.number(0, enumValues.length);
        // console.debug({ enumValues, randomIndex });
        return enumValues[randomIndex];
    },
    number(min: number, max: number): number {
      return min + Math.floor(Math.random() * max);
    },
    elements(select: number, collection: any[]): any[] {
      return  Tools.randomize.elements(collection).slice(0, select);
    },
  },
  randomize: {
    elements: (collection: any[]) => [...collection].sort(() => Math.random() - Math.random()),
  },
};

export default Tools;
