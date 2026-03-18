import { BrowserRouter, Route, Routes } from "react-router";
import { Main } from "../../pages/Main/Main";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
