import z from "zod";
import { movieSchema } from "./movieSchema";

export const searchResponseSchema = z.object({
  docs: z.array(movieSchema),
  limit: z.number(),
  next: z.string().nullable(),
  prev: z.string().nullable(),
  hasNext: z.boolean(),
  hasPrev: z.boolean(),
  total: z.number().nullable().optional(),
});
