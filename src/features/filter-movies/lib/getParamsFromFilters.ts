import type { Filters } from "../model/types/Filters";

export function getParamsFromFilters(filters: Filters) {
  return {
    year: `${filters.yearRange[0]}-${filters.yearRange[1]}`,
    "rating.kp": `${filters.kinopoiskRange[0]}-${filters.kinopoiskRange[1]}`,
    "rating.imdb": `${filters.imdbRange[0]}-${filters.imdbRange[1]}`,
    "genres.name": filters.genres,
  };
}
