import { Box, useAdaptivityWithJSMediaQueries } from "@vkontakte/vkui";
import { HorizontalContent } from "./HorizontalCompareTable";
import styles from "./CompareTable.module.css";

export function ComparingTable() {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  return (
    <Box className={styles["table-wrapper"]} padding="xl">
      <table className={styles.table}>{isDesktop ? <HorizontalContent /> : "NOW"}</table>
    </Box>
  );
}
