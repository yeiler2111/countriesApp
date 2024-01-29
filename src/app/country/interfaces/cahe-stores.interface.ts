import { country } from "./countries";
import { region } from './region.type';

export interface Cachestore{
  byCapital:TermCountries,
  byCountries: TermCountries,
  byRegion: RegionCountries

}

export interface TermCountries {
  term: string,
  countries : country[]
}

export interface RegionCountries {
  region: region,
  countries  : country[]
}
