import { useEffect } from "react";
import { FavoriteModal } from "../../features/toggle-favorite/ui/FavoriteModal/FavoriteModal";
import { PageTitle } from "../../shared/ui/PageTitle/PageTitles";
import { MoviesList } from "../../widgets/MoviesList.tsx/ui/MoviesList";
import { useUnit } from "effector-react";
import { $movies, loadNextPage, resetMovies } from "../../entities/movie/model/stores/movies.store";
import { ComparingArea } from "../../features/compare-movies/ui/ComparingArea/ComparingArea";
import { FiltersPanel } from "../../features/filter-movies/ui/FiltersPanel";
import { Flex, Separator } from "@vkontakte/vkui";

export function Main() {
  const [movies, loadNext, reset] = useUnit([$movies, loadNextPage, resetMovies]);
  useEffect(() => {
    loadNext();
    return () => reset();
  }, []);

  return (
    <>
      <PageTitle title="НАЙДИ СВОЕ КИНО" />
      <div style={{ display: "grid", gridTemplateColumns: "250px auto 1fr" }}>
        <FiltersPanel />
        <Flex height="100%">
          <Separator direction="vertical" />
        </Flex>
        <MoviesList movies={movies} />
      </div>
      <FavoriteModal />
      <ComparingArea />
    </>
  );
}
