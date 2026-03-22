import { Headline, Paragraph } from "@vkontakte/vkui";
import styles from "./CompareTable.module.css";
import { CELL_TYPES } from "../../constants/cellTypes";

interface Props {
  text: string;
  type: (typeof CELL_TYPES)[keyof typeof CELL_TYPES];
}

export function TableCell({ text, type = CELL_TYPES.TEXT }: Props) {
  const isHead = type === CELL_TYPES.HEAD;
  const isAccent = type === CELL_TYPES.ACCENT;
  return (
    <>
      {isHead ? (
        <th className={styles.cell}>
          <Headline>{text}</Headline>
        </th>
      ) : (
        <td className={styles.cell}>
          {isAccent ? <Headline>{text}</Headline> : <Paragraph>{text}</Paragraph>}
        </td>
      )}
    </>
  );
}
