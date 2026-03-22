import {
  Box,
  ContentBadge,
  Counter,
  Flex,
  Paragraph,
  Separator,
  Spacing,
  Title,
} from "@vkontakte/vkui";
import type { Movie } from "../../model/types/Movie";

type Props = Pick<Movie, "name" | "genres" | "description" | "premiere" | "year" | "rating">;

export function DetailCardText({ name, genres, description, premiere, year, rating }: Props) {
  return (
    <Box padding="2xl">
      <Title level="1">{name}</Title>
      <Spacing />
      <Separator />
      <Spacing />
      <Title level="3">
        Дата выхода: <Paragraph>{premiere ?? year}</Paragraph>
      </Title>
      <Spacing />
      <Flex gap="m">
        <Title level="3">Кинопоиск:</Title>
        <Counter>{rating?.kp?.toFixed(1)}</Counter>
      </Flex>
      <Spacing />
      <Flex gap="m">
        <Title level="3">IMDb:</Title>
        <Counter>{rating?.imdb?.toFixed(1)}</Counter>
      </Flex>
      <Spacing />
      <Flex gap="m">
        <Title level="3">Жанры:</Title>
        <Flex gap="s">
          {genres.map((genre) => (
            <ContentBadge key={genre.name} appearance="neutral" mode="outline">
              {genre.name}
            </ContentBadge>
          ))}
        </Flex>
      </Flex>
      <Spacing size="2xl" />
      <Spacing size="2xl" />
      {description && (
        <>
          <Separator />
          <Paragraph>{description}</Paragraph>
        </>
      )}
    </Box>
  );
}
