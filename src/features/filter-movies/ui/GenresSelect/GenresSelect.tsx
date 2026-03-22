import { ChipsSelect, Flex, Headline, Spacing } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { $genres, setGenres } from "../../model/stores/filters.store";
import { $availableGenres } from "../../model/stores/genres.store";

export function GenresSelect() {
  const [availableGenres, genres, set] = useUnit([$availableGenres, $genres, setGenres]);

  return (
    <>
      <Headline>Жанры</Headline>
      <Spacing size="l" />
      <Flex>
        <ChipsSelect
          id="select-id"
          value={genres.map((genre) => ({ value: genre, label: genre }))}
          onChange={(value) => {
            set(value.map((elem) => elem.label));
          }}
          placeholder="Не выбран"
          options={availableGenres.map((genre) => ({ value: genre, label: genre }))}
        />
      </Flex>
    </>
  );
}
