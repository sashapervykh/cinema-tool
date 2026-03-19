import {
  Card,
  Flex,
  Paragraph,
  Title,
  Image,
  Box,
  Counter,
  Separator,
  Spacing,
  ContentBadge,
} from "@vkontakte/vkui";
import { $movies } from "../../model/stores/movies.store";
import { useUnit } from "effector-react";
import { useParams } from "react-router";
import { Icon12PictureOutline } from "@vkontakte/icons";

export function DetailCard() {
  const { id } = useParams();
  const [movies] = useUnit([$movies]);
  const currentMovie = movies.find((movie) => movie.id === id);
  if (!currentMovie) return <Paragraph>Этот фильм не найден!</Paragraph>;
  return (
    <Box padding="2xl">
      <Card style={{ display: "grid", gridTemplateColumns: "30% 70%", minHeight: "500px" }}>
        <Box padding="2xl">
          <Image
            src={currentMovie.poster?.url ?? undefined}
            alt={`Постер к фильму "${currentMovie.name}"`}
            borderRadius="l"
            widthSize="100%"
            heightSize="100%"
            style={{ objectFit: "cover" }}
            fallbackIcon={
              <Flex direction="column" justify="center" align="center">
                <Icon12PictureOutline width={40} height={40} />
                <Title level="3">Постера нет</Title>
              </Flex>
            }
          />
        </Box>
        <Box padding="2xl">
          <Title level="1">{currentMovie.name}</Title>
          <Spacing />
          <Separator />
          <Spacing />
          <Title level="3">
            Дата выхода: <Paragraph>{currentMovie.premiere ?? currentMovie.year}</Paragraph>
          </Title>
          <Spacing />
          <Flex gap="m">
            <Title level="3">Кинопоиск:</Title>
            <Counter>{currentMovie.rating?.kp?.toFixed(1)}</Counter>
          </Flex>
          <Spacing />
          <Flex gap="m">
            <Title level="3">IMDb:</Title>
            <Counter>{currentMovie.rating?.imdb?.toFixed(1)}</Counter>
          </Flex>
          <Spacing />
          <Flex gap="m">
            <Title level="3">Жанры:</Title>
            <Flex gap="s">
              {currentMovie.genres.map((genre) => (
                <ContentBadge key={genre.name} appearance="neutral" mode="outline">
                  {genre.name}
                </ContentBadge>
              ))}
            </Flex>
          </Flex>
          <Spacing size="2xl" />
          <Spacing size="2xl" />

          {currentMovie.description && (
            <>
              <Separator />
              <Paragraph>{currentMovie.description}</Paragraph>
            </>
          )}
        </Box>
      </Card>
    </Box>
  );
}
