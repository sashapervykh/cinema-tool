import { useEffect, useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import type { SearchResponse } from "../types/SearchResponse";
import { Box, Card, Image, Paragraph, SimpleGrid, Spacing, Title } from "@vkontakte/vkui";
import { Icon12PictureOutline } from "@vkontakte/icons";
import style from "./movie.module.css";

export function Movie() {
  const [response, setResponse] = useState<SearchResponse | undefined>();
  useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies();
      setResponse(movies);
    }
    getMovies();
  }, []);

  if (!response) return <div>Not received</div>;
  return (
    <Box padding="l">
      <SimpleGrid minColWidth={250} gap="l">
        {response.docs.map((movie) => {
          return (
            <Card key={movie.id} mode="shadow" className={style.card}>
              <div style={{ width: "100%", height: "75%" }}>
                <Image
                  src={movie.poster?.url ?? undefined}
                  borderRadius="l"
                  widthSize="100%"
                  heightSize="100%"
                  style={{ objectFit: "cover" }}
                  fallbackIcon={
                    <div>
                      <Icon12PictureOutline width={40} height={40} />
                    </div>
                  }
                />
              </div>
              <Spacing size="m" />
              <Title level="3">{movie.name}</Title>
              <Paragraph>{movie.year}</Paragraph>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
