import { Gang } from './Gang';
import { BoardTile } from './Board';

export interface Site {
  name: string;
  resistance: number;
  tolerance: number;
  crackdown: number;
  support: number;
  cash: number;
}

export interface SectorShape extends BoardTile {
  HQ?: Site;
  sites: Site[];
  gangs: Gang[];
}

export class Sector implements SectorShape {
  public static maxSites: number = 3;
  public static generateSites(): Site[] {
    return [];
  }

  public HQ?: Site = undefined;
  public sites: Site[];
  public gangs: Gang[] = [];

  constructor(sector: SectorShape, henchmen: Gang) {
    if (sector.HQ) {
      this.HQ = sector.HQ;
      this.addGang(henchmen);
    }
    this.sites = Sector.generateSites();
  }

  public addGang(gang: Gang) {
    this.gangs.push(gang);
  }
}
