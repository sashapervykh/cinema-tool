import { BrowserRouter, Route, Routes } from "react-router";
import { Main } from "../../pages/Main/Main";
import { Favorites } from "../../pages/Favorites/Favorites";
import { MoviePage } from "../../pages/MoviePage/MoviePage";
import { AppLayout } from "../../shared/ui/AppLayout/AppLayout";
import { ROUTES } from "../../shared/config/routes";
import { DataLoader } from "../loaders/DataLoader";

export function AppRouter() {
  return (
    <BrowserRouter>
      <DataLoader />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.ONE_MOVIE} element={<MoviePage />} />
          <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
