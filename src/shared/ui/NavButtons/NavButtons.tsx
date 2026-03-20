import {
  Icon24HealthOutline,
  Icon24SortHorizontalOutline,
  Icon24SquareGrid3x3,
} from "@vkontakte/icons";
import { PanelHeaderButton, Tooltip } from "@vkontakte/vkui";

export function NavButtons() {
  return (
    <>
      <PanelHeaderButton>
        <Tooltip placement="bottom" description="На главную">
          <Icon24SquareGrid3x3 />
        </Tooltip>
      </PanelHeaderButton>
      <PanelHeaderButton>
        <Tooltip placement="bottom" description="Режим сравнения">
          <Icon24SortHorizontalOutline />
        </Tooltip>
      </PanelHeaderButton>
      <PanelHeaderButton>
        <Tooltip placement="bottom" description="К списку избранного">
          <Icon24HealthOutline />
        </Tooltip>
      </PanelHeaderButton>
    </>
  );
}
