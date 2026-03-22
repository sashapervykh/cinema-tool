import { MovieCard } from "../MovieCard/MovieCard";
import { ComparingCheckbox } from "../../../../features/compare-movies/ui/ComparingCheckbox/ComparingCheckbox";
import { FavoriteButton } from "../../../../features/toggle-favorite/ui/FavoriteButton/FavoriteButton";
import type { Movie } from "../../model/types/Movie";
import styles from "./MoviesList.module.css";

export function MoviesList({
  movies,
  withCheckBox = true,
}: {
  movies: Movie[];
  withCheckBox?: boolean;
}) {
  return (
    <div className={styles["movies-grid"]}>
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
                {withCheckBox && <ComparingCheckbox movie={movie} />}
                <FavoriteButton movie={movie} />
              </>
            }
          />
        );
      })}
    </div>
  );
}
