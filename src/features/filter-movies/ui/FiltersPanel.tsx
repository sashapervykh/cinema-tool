import { Box, ChipsSelect, Headline, Panel, Spacing } from "@vkontakte/vkui";
import { RangeSlider } from "./RangeSlider/RangeSlider";
import { FILTERS_DATA } from "../constants/filtersData";
import { useUnit } from "effector-react";
import {
  $availableGenres,
  $imdbRange,
  $kinopoiskRange,
  $yearRange,
  getGenresFx,
  setImdbRange,
  setKinopoiskRange,
  setYearRange,
} from "../model/filters.store";
import { useEffect } from "react";

export function FiltersPanel() {
  const [kinopoisk, imdb, year, availableGenres, setKinopoisk, setImdb, setYear, getGenres] =
    useUnit([
      $kinopoiskRange,
      $imdbRange,
      $yearRange,
      $availableGenres,
      setKinopoiskRange,
      setImdbRange,
      setYearRange,
      getGenresFx,
    ]);

  useEffect(() => {
    getGenres();
  }, []);
  return (
    <Panel>
      <Box padding="xl">
        <RangeSlider
          {...FILTERS_DATA.KINOPOISK_RANGE}
          value={kinopoisk}
          handleChange={setKinopoisk}
        />
        <RangeSlider {...FILTERS_DATA.IMDB_RANGE} value={imdb} handleChange={setImdb} />
        <RangeSlider {...FILTERS_DATA.YEAR_RANGE} value={year} handleChange={setYear} />
        <Spacing size="l" />
        <Headline>Жанры</Headline>
        <ChipsSelect
          id="select-id"
          placeholder="Не выбран"
          options={availableGenres.map((genre) => ({ value: genre, label: genre }))}
        />
      </Box>
    </Panel>
  );
}
