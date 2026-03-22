import z from "zod";

export const genresResponseSchema = z.array(z.object({ name: z.string() }));
