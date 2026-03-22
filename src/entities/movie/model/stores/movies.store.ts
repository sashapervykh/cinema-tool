import { createEffect, createEvent, createStore } from "effector";
import { fetchMovies } from "../../api/fetchMovies";
import type { Movie } from "../types/Movie";

export const getMoviesFx = createEffect(fetchMovies);
export const resetMovies = createEvent();
export const $movies = createStore<Movie[]>([])
  .on(getMoviesFx.doneData, (state, value) => [...state, ...value.docs])
  .reset(resetMovies);
