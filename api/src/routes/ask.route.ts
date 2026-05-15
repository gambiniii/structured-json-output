import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { AskBodySchema, AskErrorSchema, AskResultSchema } from "../schemas/schema";
import { askController } from "../controllers/ask.controller";

export async function askRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post("/ask", {
    schema: {
      tags: ["Ask"],
      summary: "Ask a question and get a structured AI response",
      body: AskBodySchema,
      response: {
        200: AskResultSchema,
        500: AskErrorSchema,
      },
    },
    handler: askController,
  });
}
