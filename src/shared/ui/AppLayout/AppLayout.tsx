import { Flex, Link, PanelHeader, Paragraph } from "@vkontakte/vkui";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <>
      <header>
        <PanelHeader>
          <Link href="/">KinoVed</Link>
        </PanelHeader>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Flex>
          <Paragraph>
            Сделано <Link href="https://github.com/sashapervykh">Сашей Первых</Link>
          </Paragraph>
        </Flex>
      </footer>
    </>
  );
}
