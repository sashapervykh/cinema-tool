import { ChipsSelect, Flex, Headline, Spacing } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { $availableGenres, getGenresFx } from "../../model/filters.store";

export function GenresSelect() {
  const [availableGenres, getGenres] = useUnit([$availableGenres, getGenresFx]);
  useEffect(() => {
    if (availableGenres.length === 0) {
      console.log("getGenres");
      getGenres();
    }
  }, []);

  return (
    <>
      <Headline>Жанры</Headline>
      <Spacing size="l" />
      <Flex>
        <ChipsSelect
          id="select-id"
          placeholder="Не выбран"
          options={availableGenres.map((genre) => ({ value: genre, label: genre }))}
        />
      </Flex>
    </>
  );
}
