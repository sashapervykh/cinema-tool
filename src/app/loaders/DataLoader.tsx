import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { initFiltersFx } from "../../features/filter-movies/model/stores/filters.store";
import { getGenresFx } from "../../features/filter-movies/model/stores/genres.store";

export function DataLoader() {
  const [params] = useSearchParams();
  const [initFilters, getGenres] = useUnit([initFiltersFx, getGenresFx]);

  useEffect(() => {
    initFilters(params);
    getGenres();
  }, []);

  return <></>;
}
