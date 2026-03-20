import { Checkbox, Flex, Tooltip } from "@vkontakte/vkui";
import styles from "./CompareCheckbox.module.css";
import { useUnit } from "effector-react";
import {
  $comparedMovies,
  addComparedMovie,
  removeComparedMovie,
} from "../../models/comparing.store";
import type { Movie } from "../../../../entities/movie/model/types/Movie";

export function CompareCheckbox({ movie }: { movie: Movie }) {
  const [comparedMovies, add, remove] = useUnit([
    $comparedMovies,
    addComparedMovie,
    removeComparedMovie,
  ]);
  const checked = comparedMovies.some((m) => m.id === movie.id);
  return (
    <Tooltip description="Сравнить" placement="right">
      <Flex className={styles["compare-checkbox"]}>
        <Checkbox
          checked={checked}
          onChange={(e) => {
            if (e.target.checked) {
              add(movie);
            } else {
              remove(movie.id);
            }
          }}
        />
      </Flex>
    </Tooltip>
  );
}
