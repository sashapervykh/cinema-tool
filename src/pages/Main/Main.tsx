import { FavoriteModal } from "../../features/toggle-favorite/ui/FavoriteModal/FavoriteModal";
import { PageTitle } from "../../shared/ui/PageTitle/PageTitles";
import { ComparingArea } from "../../features/compare-movies/ui/ComparingArea/ComparingArea";
import { FiltersPanel } from "../../features/filter-movies/ui/FiltersPanel";
import { Flex, Separator } from "@vkontakte/vkui";
import { AllMoviesList } from "../../widgets/AllMoviesList/ui/AllMoviesList";

export function Main() {
  return (
    <>
      <PageTitle title="НАЙДИ СВОЕ КИНО" />
      <div style={{ display: "grid", gridTemplateColumns: "250px auto 1fr" }}>
        <FiltersPanel />
        <Flex height="100%">
          <Separator direction="vertical" />
        </Flex>
        <AllMoviesList />
      </div>
      <FavoriteModal />
      <ComparingArea />
    </>
  );
}
