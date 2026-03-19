import { Card } from "@vkontakte/vkui";
import style from "./MovieCard.module.css";
import { MovieCardText } from "../MovieCardText/MovieCardText";
import { MovieCardImage } from "../MovieImage/MovieImage";
import type { Movie } from "../../types/Movie";

type Props = Omit<Movie, "genres">;

export function MovieCard({ id, poster, name, year, rating }: Props) {
  return (
    <Card key={id} mode="shadow" className={style.card}>
      <MovieCardImage poster={poster} name={name} />
      <MovieCardText name={name} year={year} rating={rating} />
    </Card>
  );
}
