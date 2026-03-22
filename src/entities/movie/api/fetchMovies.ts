import { fetchData } from "../../../shared/api/fetchData";
import { searchResponseSchema } from "../model/schemas/searchResponseSchema";

export async function fetchMovies({
  page,
  filters,
}: {
  page: number;
  filters?: Record<string, string | string[]>;
}) {
  console.log(filters);
  const response = await fetchData({
    endpoint: "v1.5/movie",
    schema: searchResponseSchema,
    params: { page: page.toString(), ...filters },
  });

  return response;
}
