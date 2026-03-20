import { FavoriteModal } from "../../features/toggle-favorite/ui/FavoriteModal/FavoriteModal";
import { PageTitle } from "../../shared/ui/PageTitle/PageTitles";
import { MoviesList } from "../../widgets/MoviesList.tsx/ui/MoviesList";

export function Main() {
  return (
    <>
      <PageTitle title="НАЙДИ СВОЕ КИНО" />
      <MoviesList />
      <FavoriteModal />
    </>
  );
}
