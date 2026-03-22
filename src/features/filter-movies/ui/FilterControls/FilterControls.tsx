import { Button, ButtonGroup, Flex, Spacing } from "@vkontakte/vkui";
import { applyFilters, resetFilters } from "../../model/stores/filters.store";
import { useUnit } from "effector-react";
import { useNavigate } from "react-router";

export function FilterControls() {
  const navigate = useNavigate();
  const [reset, apply] = useUnit([resetFilters, applyFilters]);
  return (
    <>
      <Spacing size="xl" />
      <Flex justify="center">
        <ButtonGroup align="center">
          <Button
            mode="secondary"
            onClick={() => {
              reset();
            }}
          >
            Сбросить
          </Button>
          <Button
            mode="primary"
            onClick={() => {
              apply(navigate);
            }}
          >
            Применить
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}
