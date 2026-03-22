import { Spacing } from "@vkontakte/vkui";
import { Outlet } from "react-router";
import { AppFooter } from "../AppFooter/AppFooter";
import { AppHeader } from "../AppHeader/AppHeader";

export function AppLayout() {
  return (
    <>
      <AppHeader />
      <main style={{ maxHeight: "85vh", flex: 1, overflowY: "auto" }}>
        <Spacing />
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}
