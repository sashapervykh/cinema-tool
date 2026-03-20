import { createEvent, createStore } from "effector";
import type { Movie } from "../../../entities/movie/model/types/Movie";

export const addComparedMovie = createEvent<Movie>();
export const removeComparedMovie = createEvent<string>();
export const resetComparing = createEvent();

export const closeFavoriteModal = createEvent();
export const confirmAdding = createEvent();

export const addToFavorites = createEvent<Movie>();
export const removeFromFavorites = createEvent<string>();
export const $comparedMovies = createStore<Movie[]>([])
  .on(addComparedMovie, (state, movie) => {
    const last = state?.at(-1);
    if (last) {
      return [last, movie];
    }
    return [movie];
  })
  .on(removeComparedMovie, (state, id) => state.filter((m) => m.id !== id))
  .reset(resetComparing);
