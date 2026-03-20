import { Paragraph } from "@vkontakte/vkui";
import type { Movie } from "../../../../entities/movie/model/types/Movie";
import styles from "./CompareTable.module.css";
import { getHorizontalRowData } from "../../lib/getHorizotalRowData";

export function HorizontalRow({ movie }: { movie: Movie }) {
  const rowData = getHorizontalRowData(movie);
  return (
    <tr>
      {rowData.map((elem, i) => (
        <td key={i} className={styles.cell}>
          <Paragraph>{elem}</Paragraph>
        </td>
      ))}
    </tr>
  );
}
