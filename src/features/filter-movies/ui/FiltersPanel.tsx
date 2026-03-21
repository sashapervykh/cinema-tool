import { Box, ChipsSelect, Headline, Panel, Spacing } from "@vkontakte/vkui";
import { RangeSlider } from "./RangeSlider/RangeSlider";
import { FILTERS_DATA } from "../constants/filtersData";
import { useUnit } from "effector-react";
import {
  $imdbRange,
  $kinopoiskRange,
  $yearRange,
  setImdbRange,
  setKinopoiskRange,
  setYearRange,
} from "../model/filters.store";

export function FiltersPanel() {
  const [kinopoisk, imdb, year, setKinopoisk, setImdb, setYear] = useUnit([
    $kinopoiskRange,
    $imdbRange,
    $yearRange,
    setKinopoiskRange,
    setImdbRange,
    setYearRange,
  ]);
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
          options={[
            { label: "драма", value: "драма" },
            { label: "триллер", value: "триллер" },
            { label: "ужасы", value: "ужасы" },
            { label: "детектив", value: "детектив" },
            { label: "криминал", value: "криминал" },
          ]}
        />
      </Box>
    </Panel>
  );
}
