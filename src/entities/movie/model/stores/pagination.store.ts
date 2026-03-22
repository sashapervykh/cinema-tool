import { createEvent, createStore, sample } from "effector";
import { getMoviesFx, resetMovies } from "./movies.store";

export const loadNextPage = createEvent<Record<string, string | string[]>>();
export const $next = createStore<string | null>(null)
  .on(getMoviesFx.doneData, (_, value) => value.next)
  .reset(resetMovies);
sample({
  clock: loadNextPage,
  source: { cursor: $next },
  filter: ({ cursor }) => Boolean(cursor),
  fn: ({ cursor }, filters) => ({
    filters,
    ...(cursor ? { cursor } : { page: 1 }),
  }),
  target: getMoviesFx,
});
