import type { Movie } from "../../../entities/movie/model/types/Movie";

export function getHorizontalRowData(movie: Movie) {
  return [
    movie.name,
    movie.year,
    movie.rating?.kp?.toFixed(1) ?? "-",
    movie.rating?.imdb?.toFixed(1) ?? "-",
    movie.genres.map((m) => m.name).join(", "),
    movie.movieLength?.toString() ?? "-",
  ];
}
