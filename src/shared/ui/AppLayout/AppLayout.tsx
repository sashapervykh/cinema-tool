import { Link, Panel, PanelHeader } from "@vkontakte/vkui";
import { Outlet } from "react-router";
import { AppFooter } from "../AppFooter/AppFooter";

import { NavButtons } from "../NavButtons/NavButtons";
import { ROUTES } from "../../config/routes";

export function AppLayout() {
  return (
    <Panel>
      <PanelHeader style={{ maxHeight: "10vh" }} after={<NavButtons />}>
        <Link href={ROUTES.MAIN}>KinoVed</Link>
      </PanelHeader>
      <main style={{ maxHeight: "85vh", flex: 1, overflowY: "scroll" }}>
        <Outlet />
      </main>
      <AppFooter />
    </Panel>
  );
}
