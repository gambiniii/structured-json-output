import { FastifyReply, FastifyRequest } from "fastify";
import { askStructured } from "../functions/ask-core.function";
import { AskBody } from "../schemas/schema";

export async function askController(
  request: FastifyRequest<{ Body: AskBody }>,
  reply: FastifyReply,
) {
  try {
    const { query } = request.body;
    const result = await askStructured(query);
    return reply.send(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to answer";
    return reply.status(500).send({ error: message });
  }
}
