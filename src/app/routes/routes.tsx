import { BrowserRouter, Route, Routes } from "react-router";
import { Main } from "../../pages/Main/Main";
import { Favorites } from "../../pages/Favorites/Favorites";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}
