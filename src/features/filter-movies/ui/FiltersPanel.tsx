import { Box, ChipsSelect, Headline, Panel, Spacing } from "@vkontakte/vkui";
import { RangeSlider } from "./RangeSlider/RangeSlider";
import { FILTERS_DATA } from "../contants/filtersData";

export function FiltersPanel() {
  return (
    <Panel>
      <Box padding="xl">
        <RangeSlider {...FILTERS_DATA.KINOPOISK_RANGE} value={[0, 10]} />
        <RangeSlider {...FILTERS_DATA.IMDB_RANGE} value={[0, 10]} />
        <RangeSlider {...FILTERS_DATA.YEAR_RANGE} value={[1990, 2030]} />
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
