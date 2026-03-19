import z from "zod";
import type { searchResponseSchema } from "../schemas/searchResponseSchema";

export type SearchResponse = z.infer<typeof searchResponseSchema>;
