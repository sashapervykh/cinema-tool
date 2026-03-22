import { createStore } from "effector";
import { getMoviesFx } from "./movies.store";

export const $moviesError = createStore<string | null>(null)
  .on(getMoviesFx.failData, (_, error) => error.message)
  .reset(getMoviesFx);
