import { fetchData } from "../../../shared/api/fetchData";
import { searchResponseSchema } from "../model/schemas/searchResponseSchema";

export async function fetchMovies({ page }: { page: number }) {
  const response = await fetchData({
    endpoint: "v1.5/movie",
    schema: searchResponseSchema,
    params: { page: page.toString() },
  });
  console.log(response);
  return response;
}
