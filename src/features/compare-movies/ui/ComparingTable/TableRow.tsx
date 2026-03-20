import { TableCell } from "./TableCell";
import { CELL_TYPES } from "../../constants/cellTypes";

export function TableRow({ rowData }: { rowData: string[] }) {
  return (
    <tr>
      {rowData.map((elem, i) => {
        if (i === 0) {
          return <TableCell key={i} text={elem} type={CELL_TYPES.ACCENT} />;
        }
        return <TableCell key={i} text={elem} type={CELL_TYPES.TEXT} />;
      })}
    </tr>
  );
}
