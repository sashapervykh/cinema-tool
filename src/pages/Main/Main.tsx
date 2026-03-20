import { PageTitle } from "../../shared/ui/PageTitle/PageTitles";
import { MoviesList } from "../../widget/ui/MoviesList.tsx/MoviesList";

export function Main() {
  return (
    <>
      <PageTitle title="НАЙДИ СВОЕ КИНО" />
      <MoviesList />
    </>
  );
}
