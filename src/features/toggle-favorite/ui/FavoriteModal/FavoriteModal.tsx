import { Icon56ErrorOutline } from "@vkontakte/icons";
import { Button, ButtonGroup, ModalCard, Spacing } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import {
  $isModalOpen,
  $pendingMovie,
  resetAfterModalClosed,
  closeFavoriteModal,
  confirmAdding,
} from "../../model/favorites.store";

export function FavoriteModal() {
  const [isOpen, pendingMovie, close, reset, confirm] = useUnit([
    $isModalOpen,
    $pendingMovie,
    closeFavoriteModal,
    resetAfterModalClosed,
    confirmAdding,
  ]);

  return (
    <ModalCard
      open={isOpen}
      onClose={() => {
        close();
      }}
      onClosed={() => {
        reset();
      }}
      icon={<Icon56ErrorOutline />}
      title={`Вы хотите добавить фильм "${pendingMovie?.name}" в Избранное?`}
      actions={
        <>
          <Spacing size={16} />
          <ButtonGroup gap="m" stretched>
            <Button key="deny" size="l" mode="secondary" stretched onClick={() => close()}>
              Отмена
            </Button>
            <Button key="allow" size="l" mode="primary" stretched onClick={() => confirm()}>
              Добавить
            </Button>
          </ButtonGroup>
        </>
      }
    />
  );
}
