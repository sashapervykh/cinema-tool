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

export const movieSchema = z.object({
  id: z.number(),
  name: z.string(),
  year: z.number(),
  genres: z.array(genreSchema),
  poster: posterSchema,
  rating: ratingSchema,
});
