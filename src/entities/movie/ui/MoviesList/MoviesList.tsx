import { SimpleGrid } from "@vkontakte/vkui";
import { MovieCard } from "../MovieCard/MovieCard";
import { ComparingCheckbox } from "../../../../features/compare-movies/ui/ComparingCheckbox/ComparingCheckbox";
import { FavoriteButton } from "../../../../features/toggle-favorite/ui/FavoriteButton/FavoriteButton";
import type { Movie } from "../../model/types/Movie";

export function MoviesList({ movies }: { movies: Movie[] }) {
  return (
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
            actions={
              <>
                <ComparingCheckbox movie={movie} />
                <FavoriteButton movie={movie} />
              </>
            }
          />
        );
      })}
    </SimpleGrid>
  );
}
