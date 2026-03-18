import z from "zod";

const posterSchema = z
  .object({
    url: z.string().nullable(),
    previewUrl: z.string().nullable(),
  })
  .nullable()
  .optional();
const ratingSchema = z
  .looseObject({ kp: z.number().nullable(), imdb: z.number().nullable() })
  .nullable();
const genreSchema = z.object({ name: z.string() });
const movieSchema = z.object({
  id: z.number(),
  name: z.string(),
  year: z.number(),
  genres: z.array(genreSchema),
  poster: posterSchema,
  rating: ratingSchema,
});

const docsSchema = z.array(movieSchema);

export const searchResponseSchema = z.object({
  docs: docsSchema,
  limit: z.number(),
  next: z.string().nullable(),
  prev: z.string().nullable(),
  hasNext: z.boolean(),
  hasPrev: z.boolean(),
  total: z.number().nullable().optional(),
});
