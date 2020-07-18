import { Gang } from './Gang';
import { BoardTile } from '../lib/Board';
import Tools from '@/lib/Tools';

export enum SectorCode {
  LO = 'LO',
  LM = 'LM',
  MI = 'MI',
  UM = 'UM',
  UP = 'UP',
}

export interface SectorClass {
  income: number;
  tolerance: number;
  label: string;
}

export const SectorClasses: Map<SectorCode, SectorClass> = new Map([
  [SectorCode.LO, { income: 3, tolerance: 14, label: 'Lower' }],
  [SectorCode.LM, { income: 4, tolerance: 13, label: 'Lower Middle' }],
  [SectorCode.MI, { income: 5, tolerance: 12, label: 'Middle' }],
  [SectorCode.UM, { income: 6, tolerance: 11, label: 'Upper Middle' }],
  [SectorCode.UP, { income: 7, tolerance: 10, label: 'Upper' }],
]);

export interface Site {
  name: string;
  resistance: number;
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
  public row: number;
  public col: number;
  public classification: SectorClass;
  public sites: Site[] = [];
  public maxSites: number = 3;

  public HQ?: Site = undefined;
  public controlled?: boolean = false;
  public gangs: Gang[] = [];

  public get tolerance(): number {
    return this.classification.tolerance;
  }

  constructor(sector: SectorShape, henchmen: Gang) {
    this.row = sector.row;
    this.col = sector.col;
    this.classification = this.classify();

    // TODO: Set Sector Code

    if (sector.HQ) {
      this.controlled = true;
      this.addSite(sector.HQ);
      this.addGang(henchmen);
    }
  }

  public addGang(gang: Gang): void {
    this.gangs.push(gang);
  }

  public addSite(site: Site): void {
    this.sites.push(site);
  }

  public classify(): SectorClass {
    const code: SectorCode = Tools.randomEnum(SectorCode);
    return SectorClasses.get(code) as SectorClass;
  }
}
