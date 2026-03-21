import { combine, createEvent, createStore } from "effector";
import { FILTERS_DATA } from "../constants/filtersData";

export const setKinopoiskRange = createEvent<[number, number]>();
export const setImdbRange = createEvent<[number, number]>();
export const setYearRange = createEvent<[number, number]>();
export const resetFilters = createEvent();

export const $kinopoiskRange = createStore<[number, number]>([
  FILTERS_DATA.KINOPOISK_RANGE.min,
  FILTERS_DATA.KINOPOISK_RANGE.max,
])
  .on(setKinopoiskRange, (_, value) => value)
  .reset(resetFilters);

export const $imdbRange = createStore<[number, number]>([
  FILTERS_DATA.IMDB_RANGE.min,
  FILTERS_DATA.IMDB_RANGE.max,
])
  .on(setImdbRange, (_, value) => value)
  .reset(resetFilters);
export const $yearRange = createStore<[number, number]>([
  FILTERS_DATA.YEAR_RANGE.min,
  FILTERS_DATA.YEAR_RANGE.max,
])
  .on(setYearRange, (_, value) => value)
  .reset(resetFilters);

export const $filters = combine({
  kinopoiskRange: $kinopoiskRange,
  imdbRange: $imdbRange,
  yearRange: $yearRange,
});
