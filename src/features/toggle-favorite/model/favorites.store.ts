import { createEvent, createStore } from "effector";
import type { Movie } from "../../../entities/movie/model/types/Movie";

export const openFavoriteModal = createEvent<Movie>();
export const closeFavoriteModal = createEvent();
export const resetAfterModalClosed = createEvent();
export const $pendingMovie = createStore<Movie | null>(null)
  .on(openFavoriteModal, (_, movie) => movie)
  .reset(resetAfterModalClosed);
export const $isModalOpen = createStore<boolean>(false)
  .on(openFavoriteModal, () => true)
  .reset(closeFavoriteModal);
