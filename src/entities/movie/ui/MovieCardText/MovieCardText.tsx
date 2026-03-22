import {
  Box,
  Counter,
  EllipsisText,
  Flex,
  Headline,
  Paragraph,
  Spacing,
  Title,
} from "@vkontakte/vkui";
import type { Movie } from "../../model/types/Movie";

type Props = Pick<Movie, "name" | "year" | "rating">;

export function MovieCardText({ name, year, rating }: Props) {
  return (
    <Box padding="m">
      <Title level="3">
        <EllipsisText maxLines={1}>{name} </EllipsisText>
      </Title>
      <Spacing size="s" />
      <Flex gap="s">
        <Headline level="1">Год: </Headline>
        <Paragraph>{year}</Paragraph>
      </Flex>
      <Spacing size="s" />
      <Flex gap="s">
        <Headline level="1">Кинопоиск: </Headline>
        <Counter>{rating?.kp?.toFixed(1)}</Counter>
      </Flex>
      <Spacing size="s" />
      <Flex gap="s">
        <Headline level="1">IMDb: </Headline>
        <Counter>{rating?.imdb?.toFixed(1)}</Counter>
      </Flex>
    </Box>
  );
}
