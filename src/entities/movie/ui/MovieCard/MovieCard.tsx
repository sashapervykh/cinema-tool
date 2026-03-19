import { Card } from "@vkontakte/vkui";
import style from "./MovieCard.module.css";
import { MovieCardText } from "../MovieCardText/MovieCardText";
import { MovieCardImage } from "../MovieImage/MovieImage";
import type { Movie } from "../../types/Movie";
import { useNavigate } from "react-router";

type Props = Omit<Movie, "genres">;

export function MovieCard({ id, poster, name, year, rating }: Props) {
  const navigate = useNavigate();
  return (
    <Card
      mode="shadow"
      className={style.card}
      onClick={() => {
        navigate(`/movies/${id}`);
      }}
    >
      <MovieCardImage poster={poster} name={name} />
      <MovieCardText name={name} year={year} rating={rating} />
    </Card>
  );
}
