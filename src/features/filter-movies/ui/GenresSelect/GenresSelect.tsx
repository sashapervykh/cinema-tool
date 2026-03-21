import { ChipsSelect, Flex, Headline, Spacing } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { $availableGenres, $genres, getGenresFx, setGenres } from "../../model/filters.store";

export function GenresSelect() {
  const [availableGenres, genres, getGenres, set] = useUnit([
    $availableGenres,
    $genres,
    getGenresFx,
    setGenres,
  ]);

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
