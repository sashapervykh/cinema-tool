import { Box, Spinner } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { useInfiniteScroll } from "../../../shared/models/useInfiniteScroll";
import {
  $isLoading,
  $movies,
  $next,
  loadNextPage,
} from "../../../entities/movie/model/stores/movies.store";
import { getParamsFromFilters } from "../../../features/filter-movies/lib/getParamsFromFilters";
import { $filters } from "../../../features/filter-movies/model/filters.store";
import { MoviesList } from "../../../entities/movie/ui/MoviesList/MoviesList";

export function AllMoviesList() {
  const [isLoading, next, loadNext, filters, movies] = useUnit([
    $isLoading,
    $next,
    loadNextPage,
    $filters,
    $movies,
  ]);

  const loaderRef = useInfiniteScroll({
    next: Boolean(next),
    isLoading,
    onLoadMore: loadNext,
    filters: getParamsFromFilters(filters),
  });
  return (
    <Box padding="l" style={{ flex: 1, overflowY: "auto" }}>
      <MoviesList movies={movies} />
      <div ref={loaderRef} style={{ height: "100px" }}></div>
      {isLoading && <Spinner size="xl" />}
    </Box>
  );
}
