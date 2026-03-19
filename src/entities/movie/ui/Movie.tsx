import { useEffect } from "react";
import { Box, SimpleGrid } from "@vkontakte/vkui";
import { MovieCard } from "./MovieCard/MovieCard";
import { useUnit } from "effector-react";
import { $movies, loadNextPage, resetMovies } from "../model/strores/movies.store";

export function Movie() {
  const [movies, loadNext, reset] = useUnit([$movies, loadNextPage, resetMovies]);
  useEffect(() => {
    loadNext();
    return () => reset();
  }, []);
  return (
    <Box padding="l">
      <SimpleGrid minColWidth={250} gap="2xl">
        {movies.map((movie) => {
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
