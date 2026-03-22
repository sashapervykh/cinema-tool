import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { getGenresFx } from "../../features/filter-movies/model/stores/genres.store";
import { initFiltersFx } from "../../features/filter-movies/model/stores/filters.init";

export function DataLoader() {
  const [params] = useSearchParams();
  const [initFilters, getGenres] = useUnit([initFiltersFx, getGenresFx]);

  useEffect(() => {
    initFilters(params);
    getGenres();
  }, []);

  return <></>;
}
