import { Panel, useAdaptivityWithJSMediaQueries } from "@vkontakte/vkui";
import { createPortal } from "react-dom";
import { $comparedMovies } from "../../models/comparing.store";
import { useUnit } from "effector-react";
import styles from "./ComparingArea.module.css";

export function ComparingArea() {
  const [comparedMovies] = useUnit([$comparedMovies]);
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  if (comparedMovies.length === 0) return;

  return createPortal(
    <Panel className={styles["comparing-area"]}>{isDesktop ? "BACK" : "NOW"}</Panel>,
    document.body
  );
}
