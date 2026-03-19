import { Icon12PictureOutline } from "@vkontakte/icons";
import { Card, Flex, Title, Image } from "@vkontakte/vkui";
import style from "./MovieCard.module.css";
import { MovieCardText } from "../MovieCardText/MovieCardText";

interface Props {
  id: number;
  name: string;
  year: number;
  poster: { url: string | null; previewUrl: string | null } | null | undefined;
  rating: {
    [x: string]: unknown;
    kp: number | null;
    imdb: number | null;
  } | null;
}

export function MovieCard({ id, poster, name, year, rating }: Props) {
  return (
    <Card key={id} mode="shadow" className={style.card}>
      <div style={{ width: "100%", height: "75%" }}>
        <Image
          src={poster?.url ?? undefined}
          alt={`Постер к фильму "${name}"`}
          borderRadius="l"
          widthSize="100%"
          heightSize="100%"
          style={{ objectFit: "cover" }}
          fallbackIcon={
            <Flex direction="column" justify="center" align="center">
              <Icon12PictureOutline width={40} height={40} />
              <Title level="3">Постера нет</Title>
            </Flex>
          }
        />
      </div>
      <MovieCardText name={name} year={year} rating={rating} />
    </Card>
  );
}
