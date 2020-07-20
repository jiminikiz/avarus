import equipment from './equipment.csv';
import sites from './sites.csv';
import gangs from './gangs.csv';

import { Equipable } from '@/model/Equipment';
import { Site } from '@/model/Sector';
import { Gang } from '@/model/Gang';

export const Equipment: Equipable[] = equipment;
export const Sites: Site[] = sites;
export const Gangs: Gang[] = gangs;

export default {
  Equipment,
  Sites,
  Gangs,
};

