import { useUnit } from "effector-react";
import { $comparedMovies } from "../../models/comparing.store";
import { HorizontalRow } from "./HorizontalRow";
import { Box } from "@vkontakte/vkui";
import styles from "./CompareTable.module.css";
import { HorizontalHead } from "./HorizontalHead";

export function HorizontalCompareTable() {
  const [comparedMovies] = useUnit([$comparedMovies]);

  return (
    <Box className={styles["table-wrapper"]} padding="xl">
      <table className={styles.table}>
        <HorizontalHead />
        <HorizontalRow movie={comparedMovies[0]} />
        {comparedMovies[1] && <HorizontalRow movie={comparedMovies[1]} />}
      </table>
    </Box>
  );
}
