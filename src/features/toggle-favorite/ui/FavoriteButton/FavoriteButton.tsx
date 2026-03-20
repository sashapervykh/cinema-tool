import { Icon28HeartCircleOutline } from "@vkontakte/icons";
import { IconButton, Tooltip } from "@vkontakte/vkui";
import styles from "./FavoriteButton.module.css";
import { useUnit } from "effector-react";
import {
  $favoritesMovies,
  openFavoriteModal,
  removeFromFavorites,
} from "../../model/favorites.store";
import type { Movie } from "../../../../entities/movie/model/types/Movie";

export function FavoriteButton({ movie }: { movie: Movie }) {
  const [openModal, favorites, remove] = useUnit([
    openFavoriteModal,
    $favoritesMovies,
    removeFromFavorites,
  ]);
  const isFavorite = favorites.some((m) => movie.id === m.id);
  const tooltip = isFavorite ? "Убрать из избранного" : "В избранное";
  const handleClick = () => {
    if (isFavorite) {
      remove(movie.id);
      return;
    }
    openModal(movie);
  };

  return (
    <>
      <IconButton
        className={`${styles["fav-button"]} ${isFavorite ? styles["chosen-button"] : styles["missed-button"]}`}
        hoverMode={`${isFavorite ? styles["chosen-button_hovered"] : styles["missed-button_hovered"]}`}
        onClick={handleClick}
        aria-label={tooltip}
      >
        <Tooltip description={tooltip} placement="left">
          <Icon28HeartCircleOutline />
        </Tooltip>
      </IconButton>
    </>
  );
}
