import { useUnit } from "effector-react";
import { $favoritesMovies } from "../../features/toggle-favorite/model/favorites.store";
import { PageTitle } from "../../shared/ui/PageTitle/PageTitles";
import { MoviesList } from "../../widgets/MoviesList.tsx/ui/MoviesList";
import { Paragraph } from "@vkontakte/vkui";

export function Favorites() {
  const [favorites] = useUnit([$favoritesMovies]);

  return (
    <>
      <PageTitle title="ИЗБРАННОЕ" />
      {favorites.length === 0 ? (
        <Paragraph align="center">Вы еще не добавляли фильмы в Избранное...</Paragraph>
      ) : (
        <MoviesList movies={favorites} />
      )}
    </>
  );
}
