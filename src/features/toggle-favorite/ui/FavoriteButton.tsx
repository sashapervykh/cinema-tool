import { Icon28HeartCircleOutline } from "@vkontakte/icons";
import { Flex, Tooltip } from "@vkontakte/vkui";
import style from "./FavoriteButton.module.css";

export function FavoriteButton() {
  return (
    <Flex
      className={style["fav-button"]}
      onClick={() => {
        console.log("liked");
      }}
    >
      <Tooltip>
        <Icon28HeartCircleOutline />
      </Tooltip>
    </Flex>
  );
}
