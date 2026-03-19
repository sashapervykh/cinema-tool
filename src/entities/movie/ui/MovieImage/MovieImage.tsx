import { Icon12PictureOutline } from "@vkontakte/icons";
import { Flex, Title, Image } from "@vkontakte/vkui";
import type { Movie } from "../../model/types/Movie";

type Props = Pick<Movie, "name" | "poster">;

export function MovieCardImage({ name, poster }: Props) {
  return (
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
  );
}
