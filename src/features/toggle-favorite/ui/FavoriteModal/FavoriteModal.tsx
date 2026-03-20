import { Icon56ErrorOutline } from "@vkontakte/icons";
import { Button, ButtonGroup, ModalCard, Spacing } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import {
  $isModalOpen,
  $pendingMovie,
  resetAfterModalClosed,
  closeFavoriteModal,
} from "../../model/favorites.store";

export function FavoriteModal() {
  const [isOpen, pendingMovie, close, reset] = useUnit([
    $isModalOpen,
    $pendingMovie,
    closeFavoriteModal,
    resetAfterModalClosed,
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
            <Button key="allow" size="l" mode="primary" stretched onClick={() => close()}>
              Добавить
            </Button>
          </ButtonGroup>
        </>
      }
    />
  );
}
