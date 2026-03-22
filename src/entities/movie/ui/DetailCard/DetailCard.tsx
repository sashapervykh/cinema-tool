import { Card, Paragraph, Box } from "@vkontakte/vkui";
import { $movies } from "../../model/stores/movies.store";
import { useUnit } from "effector-react";
import { useParams } from "react-router";
import { MovieCardImage } from "../MovieImage/MovieImage";
import { DetailCardText } from "../DetailCardText/DetailCardText";
import { $favoritesMovies } from "../../../../features/toggle-favorite/model/favorites.store";
import styles from "./DetailCard.module.css";

export function DetailCard() {
  const { id } = useParams();
  const [movies, favoritesMovies] = useUnit([$movies, $favoritesMovies]);
  const currentMovie =
    movies.find((movie) => movie.id.toString() === id) ??
    favoritesMovies.find((movie) => movie.id.toString() === id);
  if (!currentMovie) return <Paragraph>Этот фильм не найден!</Paragraph>;
  return (
    <Box padding="2xl">
      <Card className={styles["detail-card"]}>
        <Box padding="2xl">
          <MovieCardImage name={currentMovie.name} poster={currentMovie.poster} />
        </Box>
        <DetailCardText {...currentMovie} />
      </Card>
    </Box>
  );
}
