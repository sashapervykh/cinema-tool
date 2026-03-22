import { Button, Header } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { $comparedMovies, resetComparing } from "../../models/comparing.store";

export function ComparingHeader() {
  const [comparedMovies, reset] = useUnit([$comparedMovies, resetComparing]);
  return (
    <Header size="m">
      {comparedMovies.length === 1 ? (
        "Выберите еще один фильм"
      ) : (
        <Button
          mode="secondary"
          onClick={() => {
            reset();
          }}
        >
          Сбросить
        </Button>
      )}
    </Header>
  );
}
