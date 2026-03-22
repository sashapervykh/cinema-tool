import { fetchData } from "../../../shared/api/fetchData";
import { genresResponseSchema } from "../model/schemas/genresResponseSchema";

export async function fetchGenres() {
  const response = await fetchData({
    endpoint: "v1/movie/possible-values-by-field",
    schema: genresResponseSchema,
    params: { field: "genres.name" },
  });
  return response;
}
