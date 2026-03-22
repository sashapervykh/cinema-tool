import { createEffect, sample } from "effector";
import { FILTERS_DATA } from "../../constants/filtersData";
import { setGenres, setImdbRange, setKinopoiskRange, setYearRange } from "./filters.store";
import { getParamsFromFilters } from "../../lib/getParamsFromFilters";
import { getMoviesFx } from "../../../../entities/movie/model/stores/movies.store";

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
    return {
      page: 1,
      filters: params,
    };
  },
  target: getMoviesFx,
});
