import { Button, Header } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { $comparedMovies } from "../../models/comparing.store";

export function ComparingHeader() {
  const [comparedMovies] = useUnit([$comparedMovies]);
  return (
    <Header size="m">
      {comparedMovies.length === 1 ? (
        "Выберите еще один фильм"
      ) : (
        <Button mode="secondary">Сбросить</Button>
      )}
    </Header>
  );
}
