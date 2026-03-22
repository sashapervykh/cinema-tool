import { createEffect, createStore } from "effector";
import { fetchGenres } from "../../api/fetchGenres";

export const getGenresFx = createEffect(fetchGenres);
export const $availableGenres = createStore<string[]>([]).on(getGenresFx.done, (_, data) =>
  data.result.map(({ name }) => name)
);
