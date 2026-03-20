import { useEffect } from "react";
import { Box, SimpleGrid } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import {
  $movies,
  loadNextPage,
  resetMovies,
} from "../../../entities/movie/model/stores/movies.store";
import { MovieCard } from "../../../entities/movie/ui/MovieCard/MovieCard";
import { FavoriteButton } from "../../../features/toggle-favorite/ui/FavoriteButton/FavoriteButton";

export function MoviesList() {
  const [movies, loadNext, reset] = useUnit([$movies, loadNextPage, resetMovies]);
  useEffect(() => {
    console.log("1");
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
              actions={<FavoriteButton movie={movie} />}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
