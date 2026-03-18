import { useEffect } from "react";
import { fetchMovies } from "../api/fetchMovies";

export function Movie() {
  useEffect(() => {
    async function getMovies() {
      const movies = await fetchMovies();
      console.log(movies);
    }
    getMovies();
  }, []);

  return <div>Movies</div>;
}
