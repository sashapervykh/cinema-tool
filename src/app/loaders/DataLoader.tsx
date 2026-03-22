import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { getGenresFx, initFiltersFx } from "../../features/filter-movies/model/filters.store";

export function DataLoader() {
  const [params] = useSearchParams();
  const [initFilters, getGenres] = useUnit([initFiltersFx, getGenresFx]);

  useEffect(() => {
    initFilters(params);
    getGenres();
  }, []);

  return <></>;
}
