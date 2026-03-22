import { Card } from "@vkontakte/vkui";
import style from "./MovieCard.module.css";
import { MovieCardText } from "../MovieCardText/MovieCardText";
import { MovieCardImage } from "../MovieImage/MovieImage";
import type { Movie } from "../../model/types/Movie";
import { ROUTES } from "../../../../shared/config/routes";
import type { ReactNode } from "react";
import { Redirection } from "../../../../shared/ui/Redirection/Redirection";

type Props = Omit<Movie, "genres" | "description" | "premiere">;
type Actions = { actions?: ReactNode };

export function MovieCard({ id, poster, name, year, rating, actions }: Props & Actions) {
  return (
    <Card mode="shadow" className={style.card}>
      <Redirection to={`${ROUTES.MOVIES}/${id}`}>
        <div style={{ width: "100%", height: "75%" }}>
          <MovieCardImage poster={poster} name={name} />
        </div>
      </Redirection>
      <Redirection to={`${ROUTES.MOVIES}/${id}`}>
        <MovieCardText name={name} year={year} rating={rating} />
      </Redirection>
      {actions}
    </Card>
  );
}
