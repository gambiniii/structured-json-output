import { z } from "zod";

export const querySchema = z.object({
  query: z
    .string()
    .min(3, "Question must be at least 3 characters.")
    .max(500, "Question must not exceed 500 characters."),
});

export type QueryFormValues = z.infer<typeof querySchema>;
