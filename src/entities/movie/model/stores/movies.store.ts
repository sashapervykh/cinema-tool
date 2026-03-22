import { createEffect, createEvent, createStore, sample } from "effector";
import { fetchMovies } from "../../api/fetchMovies";
import type { Movie } from "../types/Movie";

export const getMoviesFx = createEffect(fetchMovies);
export const resetMovies = createEvent();
export const loadNextPage = createEvent<Record<string, string | string[]>>();
export const $next = createStore<string | null>(null)
  .on(getMoviesFx.doneData, (_, value) => value.next)
  .reset(resetMovies);
export const $movies = createStore<Movie[]>([])
  .on(getMoviesFx.doneData, (state, value) => [...state, ...value.docs])
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

sample({
  clock: loadNextPage,
  source: { cursor: $next },
  filter: ({ cursor }) => Boolean(cursor),
  fn: ({ cursor }, filters) => ({
    filters,
    cursor,
    page: cursor ? undefined : 1,
  }),
  target: getMoviesFx,
});
