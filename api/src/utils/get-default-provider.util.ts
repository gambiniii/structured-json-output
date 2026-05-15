import { ModelProvider } from "../types/model.types";
import { ChatGroq } from "@langchain/groq";
import { ChatOpenAI } from "@langchain/openai";
import { geminiConfig } from "../config/gemini.config";
import { groqConfig } from "../config/groq.config";
import { openAiConfig } from "../config/openai.config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

type ProviderInstance = ChatOpenAI | ChatGroq | ChatGoogleGenerativeAI;

const factories: Record<ModelProvider, () => ProviderInstance> = {
  openai: () => new ChatOpenAI(openAiConfig),
  gemini: () => new ChatGoogleGenerativeAI(geminiConfig),
  groq: () => new ChatGroq(groqConfig),
};

let instance: ProviderInstance | null = null;

export const getDefaultProvider = (): ProviderInstance => {
  if (instance) return instance;

  const selected = (
    process.env.PROVIDER || "gemini"
  ).toLowerCase() as ModelProvider;

  const factory = factories[selected];

  if (!factory) throw new Error(`Unknown provider: "${selected}"`);

  instance = factory();
  return instance;
};
