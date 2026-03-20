import type { Movie } from "../../../entities/movie/model/types/Movie";

export function getCellData(movie: Movie) {
  return [
    movie.name,
    movie.year.toString(),
    movie.rating?.kp?.toFixed(1) ?? "-",
    movie.rating?.imdb?.toFixed(1) ?? "-",
    movie.genres.map((m) => m.name).join(", "),
    movie.movieLength?.toString() ?? "-",
  ];
}
