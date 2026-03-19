import { useEffect, useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import type { SearchResponse } from "../types/SearchResponse";
import { Box, SimpleGrid } from "@vkontakte/vkui";
import { MovieCard } from "./MovieCard/MovieCard";

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
      <SimpleGrid minColWidth={250} gap="2xl">
        {response.docs.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              rating={movie.rating}
              name={movie.name}
              year={movie.year}
              poster={movie.poster}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
