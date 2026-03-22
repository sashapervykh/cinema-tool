import { Icon24HeartGearOutline, Icon24SquareGrid3x3 } from "@vkontakte/icons";
import { ButtonGroup, IconButton, Tooltip } from "@vkontakte/vkui";
import { useNavigate } from "react-router";
import { ROUTES } from "../../config/routes";

export function NavButtons() {
  const navigate = useNavigate();
  return (
    <ButtonGroup>
      <IconButton
        onClick={() => {
          navigate(ROUTES.MAIN);
        }}
      >
        <Tooltip placement="bottom" description="На главную">
          <Icon24SquareGrid3x3 />
        </Tooltip>
      </IconButton>
      <IconButton
        onClick={() => {
          navigate(ROUTES.FAVORITES);
        }}
      >
        <Tooltip placement="bottom" description="К списку избранного">
          <Icon24HeartGearOutline />
        </Tooltip>
      </IconButton>
    </ButtonGroup>
  );
}
