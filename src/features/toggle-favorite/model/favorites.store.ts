import { createEvent, createStore, sample } from "effector";
import type { Movie } from "../../../entities/movie/model/types/Movie";
import { persist } from "effector-storage/local";

export const openFavoriteModal = createEvent<Movie>();
export const closeFavoriteModal = createEvent();
export const confirmAdding = createEvent();
export const resetAfterModalClosed = createEvent();
export const addToFavorites = createEvent<Movie>();
export const removeFromFavorites = createEvent<number>();
export const $pendingMovie = createStore<Movie | null>(null)
  .on(openFavoriteModal, (_, movie) => movie)
  .reset(resetAfterModalClosed);
export const $isModalOpen = createStore<boolean>(false)
  .on(openFavoriteModal, () => true)
  .reset(closeFavoriteModal);
export const $favoritesMovies = createStore<Movie[]>([])
  .on(addToFavorites, (state, movie) => [...state, movie])
  .on(removeFromFavorites, (state, id) => state.filter((movie) => movie.id !== id));

persist({
  store: $favoritesMovies,
  key: "favorites",
});

sample({
  clock: confirmAdding,
  source: $pendingMovie,
  filter: Boolean,
  target: addToFavorites,
});

sample({
  clock: confirmAdding,
  target: closeFavoriteModal,
});
