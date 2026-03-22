import { Card, Paragraph, Box } from "@vkontakte/vkui";
import { $movies } from "../../model/stores/movies.store";
import { useUnit } from "effector-react";
import { useParams } from "react-router";
import { MovieCardImage } from "../MovieImage/MovieImage";
import { DetailCardText } from "../DetailCardText/DetailCardText";

export function DetailCard() {
  const { id } = useParams();
  const [movies] = useUnit([$movies]);
  const currentMovie = movies.find((movie) => movie.id.toString() === id);
  if (!currentMovie) return <Paragraph>Этот фильм не найден!</Paragraph>;
  return (
    <Box padding="2xl">
      <Card style={{ display: "grid", gridTemplateColumns: "30% 70%", minHeight: "500px" }}>
        <Box padding="2xl" height="95%">
          <MovieCardImage name={currentMovie.name} poster={currentMovie.poster} />
        </Box>
        <DetailCardText {...currentMovie} />
      </Card>
    </Box>
  );
}
