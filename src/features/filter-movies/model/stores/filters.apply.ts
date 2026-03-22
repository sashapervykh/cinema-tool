import { createEffect, createEvent, sample } from "effector";
import type { NavigateFunction } from "react-router";
import type { Filters } from "../types/Filters";
import { $filters } from "./filters.store";
import { getMoviesFx, resetMovies } from "../../../../entities/movie/model/stores/movies.store";
import { getParamsFromFilters } from "../../lib/getParamsFromFilters";

export const applyFilters = createEvent<NavigateFunction>();
export const updateUrlFx = createEffect(
  ({ filters, navigate }: { filters: Filters; navigate: NavigateFunction }) => {
    const params = new URLSearchParams();

    if (filters.genres.length) {
      filters.genres.forEach((g) => params.append("genres.name", g));
    }
    params.set("year", `${filters.yearRange[0]}-${filters.yearRange[1]}`);
    params.set("rating.kp", `${filters.kinopoiskRange[0]}-${filters.kinopoiskRange[1]}`);
    params.set("rating.imdb", `${filters.imdbRange[0]}-${filters.imdbRange[1]}`);

    navigate({ search: params.toString() });
  }
);

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
