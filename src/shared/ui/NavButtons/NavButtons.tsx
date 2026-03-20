import { Icon24HealthOutline, Icon24SquareGrid3x3 } from "@vkontakte/icons";
import { PanelHeaderButton, Tooltip } from "@vkontakte/vkui";
import { useNavigate } from "react-router";
import { ROUTES } from "../../config/routes";

export function NavButtons() {
  const navigate = useNavigate();
  return (
    <>
      <PanelHeaderButton
        onClick={() => {
          navigate(ROUTES.MAIN);
        }}
      >
        <Tooltip placement="bottom" description="На главную">
          <Icon24SquareGrid3x3 />
        </Tooltip>
      </PanelHeaderButton>
      <PanelHeaderButton
        onClick={() => {
          navigate(ROUTES.FAVORITES);
        }}
      >
        <Tooltip placement="bottom" description="К списку избранного">
          <Icon24HealthOutline />
        </Tooltip>
      </PanelHeaderButton>
    </>
  );
}
