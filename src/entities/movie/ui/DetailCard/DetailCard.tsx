import { Card, Paragraph } from "@vkontakte/vkui";

import { $movies } from "../../model/strores/movies.store";
import { useUnit } from "effector-react";
import { useParams } from "react-router";

export function DetailCard() {
  const { id } = useParams();
  const [movies] = useUnit([$movies]);
  const currentMovie = movies.find((movie) => movie.id === id);
  if (!currentMovie) return <Paragraph>Этот фильм не найден!</Paragraph>;
  return <Card>{currentMovie.name}</Card>;
}
