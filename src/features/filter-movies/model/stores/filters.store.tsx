import { combine, createEffect, createEvent, createStore, sample } from "effector";
import { FILTERS_DATA } from "../../constants/filtersData";
import type { NavigateFunction } from "react-router";
import type { Filters } from "../types/Filters";
import { getMoviesFx, resetMovies } from "../../../../entities/movie/model/stores/movies.store";
import { getParamsFromFilters } from "../../lib/getParamsFromFilters";

export const applyFilters = createEvent<NavigateFunction>();
export const setKinopoiskRange = createEvent<[number, number]>();
export const setImdbRange = createEvent<[number, number]>();
export const setYearRange = createEvent<[number, number]>();
export const setGenres = createEvent<string[]>();
export const resetFilters = createEvent();
export const updateUrlFx = createEffect(
  ({ filters, navigate }: { filters: Filters; navigate: NavigateFunction }) => {
    const params = new URLSearchParams();

    if (filters.genres.length) {
      filters.genres.forEach((g) => params.append("genres.name", g));
    }
    params.set("year", `${filters.yearRange[0]}-${filters.yearRange[1]}`);
    params.set("year", `${filters.yearRange[0]}-${filters.yearRange[1]}`);
    params.set("rating.kp", `${filters.kinopoiskRange[0]}-${filters.kinopoiskRange[1]}`);
    params.set("rating.imdb", `${filters.imdbRange[0]}-${filters.imdbRange[1]}`);

    navigate({ search: params.toString() });
  }
);

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

export const $genres = createStore<string[]>([])
  .on(setGenres, (_, value) => value)
  .reset(resetFilters);

export const $filters = combine({
  kinopoiskRange: $kinopoiskRange,
  imdbRange: $imdbRange,
  yearRange: $yearRange,
  genres: $genres,
});

sample({
  clock: applyFilters,
  source: $filters,
  fn: (filters, navigate) => ({ filters, navigate }),
  target: updateUrlFx,
});

sample({
  clock: applyFilters,
  target: resetMovies,
});

sample({
  clock: applyFilters,
  source: $filters,
  fn: (filters) => {
    const params = getParamsFromFilters(filters);
    return { filters: params, page: 1 };
  },
  target: getMoviesFx,
});

export const initFiltersFx = createEffect((params: URLSearchParams) => {
  const genres = params.getAll("genres.name");
  const [yearFrom, yearTo] = params.get("year")?.split("-").map(Number) ?? [
    FILTERS_DATA.YEAR_RANGE.min,
    FILTERS_DATA.YEAR_RANGE.max,
  ];
  const [kpFrom, kpTo] = params.get("rating.kp")?.split("-").map(Number) ?? [
    FILTERS_DATA.KINOPOISK_RANGE.min,
    FILTERS_DATA.KINOPOISK_RANGE.max,
  ];
  const [imdbFrom, imdbTo] = params.get("rating.imdb")?.split("-").map(Number) ?? [
    FILTERS_DATA.KINOPOISK_RANGE.min,
    FILTERS_DATA.KINOPOISK_RANGE.max,
  ];
  return {
    genres,
    yearRange: [yearFrom, yearTo] as [number, number],
    kinopoiskRange: [kpFrom, kpTo] as [number, number],
    imdbRange: [imdbFrom, imdbTo] as [number, number],
  };
});

sample({
  clock: initFiltersFx.doneData,
  fn: ({ genres }) => genres,
  target: setGenres,
});

sample({
  clock: initFiltersFx.doneData,
  fn: ({ yearRange }) => yearRange,
  target: setYearRange,
});

sample({
  clock: initFiltersFx.doneData,
  fn: ({ kinopoiskRange }) => kinopoiskRange,
  target: setKinopoiskRange,
});

sample({
  clock: initFiltersFx.doneData,
  fn: ({ imdbRange }) => imdbRange,
  target: setImdbRange,
});

sample({
  clock: initFiltersFx.doneData,
  fn: (filters) => {
    const params = getParamsFromFilters(filters);
    console.log(params);
    return {
      page: 1,
      filters: params,
    };
  },
  target: getMoviesFx,
});
