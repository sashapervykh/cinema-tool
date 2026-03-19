import { BrowserRouter, Route, Routes } from "react-router";
import { Main } from "../../pages/Main/Main";
import { Favorites } from "../../pages/Favorites/Favorites";
import { MoviePage } from "../../pages/MoviePage/MoviePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}
