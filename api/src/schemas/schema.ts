import z from "zod";

export const AskBodySchema = z.object({
  query: z.string().min(1, "query is required"),
});

export const AskResultSchema = z.object({
  summary: z.string().min(1).max(1000),
  confidence: z.number().min(0).max(1),
});

export const AskErrorSchema = z.object({
  error: z.string(),
});

export type AskBody = z.infer<typeof AskBodySchema>;
export type AskResult = z.infer<typeof AskResultSchema>;
