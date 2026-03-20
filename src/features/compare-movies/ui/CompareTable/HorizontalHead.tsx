import { Headline } from "@vkontakte/vkui";
import styles from "./CompareTable.module.css";

export function HorizontalHead() {
  const colNames = ["Название", "Год", "Кинопоиск", "IMDB", "Жанры", "Длительность"];
  return (
    <thead className={styles.cell}>
      <tr>
        {colNames.map((col, i) => (
          <th key={i} className={styles.cell}>
            <Headline>{col}</Headline>
          </th>
        ))}
      </tr>
    </thead>
  );
}
