import { Header, Panel } from "@vkontakte/vkui";
import { createPortal } from "react-dom";
import { $comparedMovies } from "../../models/comparing.store";
import { useUnit } from "effector-react";
import styles from "./ComparingArea.module.css";
import { ComparingTable } from "../ComparingTable/ComparingTable";

export function ComparingArea() {
  const [comparedMovies] = useUnit([$comparedMovies]);
  if (comparedMovies.length === 0) return;

  return createPortal(
    <Panel className={styles["comparing-area"]} centered={true}>
      <Header size="m">Выберите еще один фильм</Header>
      <ComparingTable />
    </Panel>,
    document.body
  );
}
