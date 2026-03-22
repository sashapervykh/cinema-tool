import { Box, useAdaptivityWithJSMediaQueries } from "@vkontakte/vkui";
import { HorizontalContent } from "./HorizontalContent";
import styles from "./CompareTable.module.css";
import { VerticalContent } from "./VerticalContent";

export function ComparingTable() {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  return (
    <Box className={styles["table-wrapper"]} padding="xl">
      <table className={styles.table}>
        {isDesktop ? <HorizontalContent /> : <VerticalContent />}
      </table>
    </Box>
  );
}
