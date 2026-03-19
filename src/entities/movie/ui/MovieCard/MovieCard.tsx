import { Card } from "@vkontakte/vkui";
import style from "./MovieCard.module.css";
import { MovieCardText } from "../MovieCardText/MovieCardText";
import { MovieCardImage } from "../MovieImage/MovieImage";

interface Props {
  id: number;
  name: string;
  year: number;
  poster: { url: string | null; previewUrl: string | null } | null | undefined;
  rating: {
    [x: string]: unknown;
    kp: number | null;
    imdb: number | null;
  } | null;
}

export function MovieCard({ id, poster, name, year, rating }: Props) {
  return (
    <Card key={id} mode="shadow" className={style.card}>
      <MovieCardImage poster={poster} name={name} />
      <MovieCardText name={name} year={year} rating={rating} />
    </Card>
  );
}
