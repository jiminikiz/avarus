import Tools from '@/lib/Tools';
import { Player } from './Player';

export enum SectorCode {
  LO = 'LO',
  LM = 'LM',
  MI = 'MI',
  UM = 'UM',
  UP = 'UP',
}

export interface SectorClass {
  label: string;
  income: number;
  tolerance: number;
}

export const SectorClasses: Map<SectorCode, SectorClass> = new Map([
  [SectorCode.LO, { code: SectorCode.LO, income: 3, tolerance: 14, label: 'Lower' }],
  [SectorCode.LM, { code: SectorCode.LM, income: 4, tolerance: 13, label: 'Lower Middle' }],
  [SectorCode.MI, { code: SectorCode.MI, income: 5, tolerance: 12, label: 'Middle' }],
  [SectorCode.UM, { code: SectorCode.UM, income: 6, tolerance: 11, label: 'Upper Middle' }],
  [SectorCode.UP, { code: SectorCode.UP, income: 7, tolerance: 10, label: 'Upper' }],
]);

export interface Site {
  name: string;
  resistance: number;
  crackdown: number;
  support: number;
  cash: number;
}

export interface SectorShape {
  classification?: SectorClass;
  controlledBy?: Player | undefined;
  maxSites?: number;
  sites?: Site[];
}

export class Sector implements SectorShape {
  public classification: SectorClass;
  public controlledBy?: Player = undefined;
  public maxSites: number = 3;
  public sites: Site[] = [];

  public get tolerance(): number {
    return this.classification.tolerance;
  }

  constructor(sector: SectorShape) {
    this.sites = sector.sites || [];
    this.classification = this.classify();
  }

  public addSite(site: Site): void {
    this.sites.push(site);
  }

  public classify(): SectorClass {
    const code: SectorCode = Tools.random.enum(SectorCode);
    return SectorClasses.get(code) as SectorClass;
  }
}
