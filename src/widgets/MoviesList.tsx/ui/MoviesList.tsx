import { Box, SimpleGrid } from "@vkontakte/vkui";
import { MovieCard } from "../../../entities/movie/ui/MovieCard/MovieCard";
import { FavoriteButton } from "../../../features/toggle-favorite/ui/FavoriteButton/FavoriteButton";
import type { Movie } from "../../../entities/movie/model/types/Movie";

export function MoviesList({ movies }: { movies: Movie[] }) {
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
