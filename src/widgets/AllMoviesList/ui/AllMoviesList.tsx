import { Box, Spinner } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { useInfiniteScroll } from "../../../shared/models/useInfiniteScroll";
import { $movies } from "../../../entities/movie/model/stores/movies.store";
import { getParamsFromFilters } from "../../../features/filter-movies/lib/getParamsFromFilters";
import { $filters } from "../../../features/filter-movies/model/stores/filters.store";
import { MoviesList } from "../../../entities/movie/ui/MoviesList/MoviesList";
import { $isLoading } from "../../../entities/movie/model/stores/loading.store";
import { $next, loadNextPage } from "../../../entities/movie/model/stores/pagination.store";

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
      <div ref={loaderRef} style={{ height: "100px" }}>
        {isLoading && <Spinner size="xl" />}
      </div>
    </Box>
  );
}
