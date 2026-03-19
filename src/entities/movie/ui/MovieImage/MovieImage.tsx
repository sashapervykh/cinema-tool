import { Icon12PictureOutline } from "@vkontakte/icons";
import { Flex, Title, Image } from "@vkontakte/vkui";

interface Props {
  name: string;
  poster: { url: string | null; previewUrl: string | null } | null | undefined;
}

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
