import { Box, Headline, Link } from "@vkontakte/vkui";
import { NavButtons } from "../NavButtons/NavButtons";
import { ROUTES } from "../../config/routes";
import styles from "./AppHeader.module.css";

export function AppHeader() {
  return (
    <header>
      <Box padding="l" className={styles["header-wrapper"]}>
        <div className={styles.logo}>
          <Link href={ROUTES.MAIN}>
            <Headline level="1">KinoVed</Headline>
          </Link>
        </div>
        <NavButtons />
      </Box>
    </header>
  );
}
