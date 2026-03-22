import { useUnit } from "effector-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { initFiltersFx } from "../../features/filter-movies/model/filters.store";

export function DataLoader() {
  const [params] = useSearchParams();
  const [initFilters] = useUnit([initFiltersFx]);

  useEffect(() => {
    initFilters(params);
  }, []);

  return <></>;
}
