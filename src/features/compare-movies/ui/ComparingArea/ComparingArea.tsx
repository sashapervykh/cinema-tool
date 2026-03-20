import { Panel } from "@vkontakte/vkui";
import { createPortal } from "react-dom";
import { $comparedMovies } from "../../models/comparing.store";
import { useUnit } from "effector-react";
import styles from "./ComparingArea.module.css";
import { ComparingTable } from "../ComparingTable/ComparingTable";
import { ComparingHeader } from "../ComparingHeader/CompatingHeader";

export function ComparingArea() {
  const [comparedMovies] = useUnit([$comparedMovies]);
  if (comparedMovies.length === 0) return;

  return createPortal(
    <Panel className={styles["comparing-area"]} centered={true}>
      <ComparingHeader />
      <ComparingTable />
    </Panel>,
    document.body
  );
}
