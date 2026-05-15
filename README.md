# JSON Structured Output

Demonstrates how to enforce structured JSON responses from LLMs using **Zod schemas + LangChain's `.withStructuredOutput()`**. Instead of parsing free-form text, the API binds a Zod schema directly to the model call — guaranteeing the response always matches the expected shape, validated at runtime.

The API is provider-agnostic: swap between OpenAI, Gemini, or Groq via a single env variable, with no code changes.

## How it works

```
User question
     │
     ▼
POST /ask
     │
     ├── resolves active provider (openai | gemini | groq)
     ├── binds AskResultSchema via .withStructuredOutput()
     └── invokes the model
           │
           ▼
     { summary: string, confidence: number }  ← Zod-validated
```

**Schema (`api/src/schemas/schema.ts`)**
```ts
const AskResultSchema = z.object({
  summary:    z.string().min(1).max(1000),
  confidence: z.number().min(0).max(1),
});
```

## Stack

- **API** — Fastify · LangChain · Zod · Swagger UI
- **Web** — Next.js 16 · React 19 · styled-components · React Query · React Hook Form

## Project structure

```
├── api/
│   └── src/
│       ├── providers/     # OpenAI, Gemini, Groq adapters
│       ├── schemas/       # Zod output schema
│       ├── functions/     # withStructuredOutput() call
│       └── routes/        # POST /ask
└── web/                   # Next.js frontend
```

## Running locally

### API

```bash
cd api
cp .env.example .env   # fill in your API key and set PROVIDER
npm install
npm run dev            # http://localhost:5000
                       # Swagger UI → http://localhost:5000/docs
```

| Variable         | Description                     |
|------------------|---------------------------------|
| `PROVIDER`       | `openai` \| `gemini` \| `groq`  |
| `OPENAI_API_KEY` | Required when `PROVIDER=openai` |
| `GOOGLE_API_KEY` | Required when `PROVIDER=gemini` |
| `GROQ_API_KEY`   | Required when `PROVIDER=groq`   |
| `PORT`           | Default: `5000`                 |

### Web

```bash
cd web
cp .env.example .env.local
npm install
npm run dev   # http://localhost:3000
```
