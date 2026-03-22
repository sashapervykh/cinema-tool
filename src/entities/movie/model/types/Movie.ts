import z from "zod";
import type { movieSchema } from "../schemas/movieSchema";

export type Movie = z.infer<typeof movieSchema>;
