import { ChatOpenAIFields } from "@langchain/openai";
import { baseConfig } from "./base.config";

export const openAiConfig: ChatOpenAIFields = {
  ...baseConfig,
  model: "gpt-4o-mini",
  apiKey: process.env.OPENAI_API_KEY,
};
