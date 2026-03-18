import { fetchData } from "../../../shared/api/fetchData";
import { searchResponseSchema } from "../schemas/searchResponseSchema";

export async function fetchMovies() {
  const response = await fetchData({ endpoint: "v1.5/movie", schema: searchResponseSchema });
  return response;
}
