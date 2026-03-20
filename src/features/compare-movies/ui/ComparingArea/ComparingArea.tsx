import { Header, Panel, useAdaptivityWithJSMediaQueries } from "@vkontakte/vkui";
import { createPortal } from "react-dom";
import { $comparedMovies } from "../../models/comparing.store";
import { useUnit } from "effector-react";
import styles from "./ComparingArea.module.css";
import { HorizontalCompareTable } from "../CompareTable/HorizontalCompareTable";

export function ComparingArea() {
  const [comparedMovies] = useUnit([$comparedMovies]);
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  if (comparedMovies.length === 0) return;

  return createPortal(
    <Panel className={styles["comparing-area"]} centered={true}>
      <Header size="m">Выберите еще один фильм</Header>
      {isDesktop ? <HorizontalCompareTable /> : "NOW"}
    </Panel>,
    document.body
  );
}
