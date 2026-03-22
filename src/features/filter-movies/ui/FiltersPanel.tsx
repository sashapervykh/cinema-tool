import { Box, Panel } from "@vkontakte/vkui";
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
} from "../model/stores/filters.store";
import { GenresSelect } from "./GenresSelect/GenresSelect";
import { FilterControls } from "./FilterControls/FilterControls";

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
      <FilterControls />
      <Box padding="xl">
        <RangeSlider
          {...FILTERS_DATA.KINOPOISK_RANGE}
          value={kinopoisk}
          handleChange={setKinopoisk}
        />
        <RangeSlider {...FILTERS_DATA.IMDB_RANGE} value={imdb} handleChange={setImdb} />
        <RangeSlider {...FILTERS_DATA.YEAR_RANGE} value={year} handleChange={setYear} />
        <GenresSelect />
      </Box>
    </Panel>
  );
}
