import { GoogleGenerativeAIChatInput } from "@langchain/google-genai";
import { baseConfig } from "./base.config";

export const geminiConfig: GoogleGenerativeAIChatInput = {
  ...baseConfig,
  model: "gemini-3.1-flash-lite",
  apiKey: process.env.GOOGLE_API_KEY,
};
