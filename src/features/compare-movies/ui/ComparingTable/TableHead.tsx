import styles from "./CompareTable.module.css";
import { CELL_TYPES } from "../../constants/cellTypes";
import { TableCell } from "./TableCell";

export function TableHead({ content }: { content: string[] }) {
  return (
    <thead className={styles.cell}>
      <tr>
        {content.map((col, i) => (
          <TableCell key={i} text={col} type={CELL_TYPES.HEAD} />
        ))}
      </tr>
    </thead>
  );
}
