import { Icon28HeartCircleOutline } from "@vkontakte/icons";
import { Flex, Tooltip } from "@vkontakte/vkui";
import styles from "./FavoriteButton.module.css";

export function FavoriteButton() {
  return (
    <Flex
      className={styles["fav-icon"]}
      onClick={() => {
        console.log("liked");
      }}
    >
      <Tooltip description="В избранное">
        <Icon28HeartCircleOutline />
      </Tooltip>
    </Flex>
  );
}
