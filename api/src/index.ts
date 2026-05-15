import Fastify from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { loadEnv } from "./utils/load-env";
import { askRoutes } from "./routes/ask.route";

loadEnv();

async function bootstrap() {
  const app = Fastify({ logger: false });

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  await app.register(cors, {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
  });

  await app.register(swagger, {
    openapi: {
      info: {
        title: "JSON Structured Output API",
        description:
          "AI-powered structured output using multiple LLM providers",
        version: "1.0.0",
      },
      tags: [{ name: "Ask", description: "Ask endpoints" }],
    },
  });

  await app.register(swaggerUi, {
    routePrefix: "/docs",
    uiConfig: { docExpansion: "full" },
  });

  await app.register(askRoutes);

  app.setErrorHandler((error, _request, reply) => {
    reply.status(500).send({ error: "Internal server error" });
  });

  const port = Number(process.env.PORT) || 5000;
  await app.listen({ port, host: "0.0.0.0" });
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/docs`);
}

bootstrap();
