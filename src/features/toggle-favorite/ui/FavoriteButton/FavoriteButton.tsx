import { Icon28HeartCircleOutline } from "@vkontakte/icons";
import { Flex, Tooltip } from "@vkontakte/vkui";
import styles from "./FavoriteButton.module.css";
import { useUnit } from "effector-react";
import { openFavoriteModal } from "../../model/favorites.store";
import type { Movie } from "../../../../entities/movie/model/types/Movie";

export function FavoriteButton({ movie }: { movie: Movie }) {
  const [openModal] = useUnit([openFavoriteModal]);
  return (
    <>
      <Flex
        className={styles["fav-icon"]}
        onClick={() => {
          openModal(movie);
        }}
      >
        <Tooltip description="В избранное" placement="left">
          <Icon28HeartCircleOutline />
        </Tooltip>
      </Flex>
    </>
  );
}
