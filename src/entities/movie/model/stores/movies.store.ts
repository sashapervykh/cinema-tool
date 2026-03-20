import { createEffect, createEvent, createStore, sample } from "effector";
import { fetchMovies } from "../../api/fetchMovies";
import type { Movie } from "../types/Movie";

export const getMoviesFx = createEffect(fetchMovies);
export const resetMovies = createEvent();
export const loadNextPage = createEvent();
export const $movies = createStore<Movie[]>([])
  .on(getMoviesFx.doneData, (state, { docs }) => [...state, ...docs])
  .reset(resetMovies);
export const $page = createStore(0)
  .on(loadNextPage, (page) => page + 1)
  .reset(resetMovies);
export const $isLoading = getMoviesFx.pending;
sample({
  clock: $page,
  source: $isLoading,
  filter: (isLoading) => !isLoading,
  fn: (_, page) => ({ page }),
  target: getMoviesFx,
});
