export type ModelProvider = "openai" | "gemini" | "groq";

export type ModelBaseConfiguration = {
  temperature: number;
  top_p?: number;
  token_limit?: number;
};
