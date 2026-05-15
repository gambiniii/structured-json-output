import { ChatGroqInput } from "@langchain/groq";
import { baseConfig } from "./base.config";

export const groqConfig: ChatGroqInput = {
  ...baseConfig,
  model: "llama-3.1-8b-instant",
  apiKey: process.env.GROQ_API_KEY,
};
