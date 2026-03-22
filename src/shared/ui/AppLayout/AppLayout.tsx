import { Spacing } from "@vkontakte/vkui";
import { Outlet } from "react-router";
import { AppFooter } from "../AppFooter/AppFooter";
import { AppHeader } from "../AppHeader/AppHeader";
import styles from "./AppLayout.module.css";

export function AppLayout() {
  return (
    <div className={styles["app-wrapper"]}>
      <AppHeader />
      <main className={styles.main}>
        <Spacing />
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}
