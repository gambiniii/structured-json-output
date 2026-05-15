import { AskResult, AskResultSchema } from "../schemas/schema";
import { getDefaultProvider } from "../utils/get-default-provider.util";

export const askStructured = async (query: string): Promise<AskResult> => {
  try {
    const provider = getDefaultProvider();

    // keep the instructions brief, so that the schema stays visible to the model

    const system =
      "You are a concise assistant. Return only the requested JSON";

    const user =
      `Summarize for a beginner: \n` +
      ` "${query}"\n` +
      `Return fields: summary (short paragraph), confidence (0..1)`;

    // binding the schema
    // we will utilize "with structured output"

    const structured = provider.withStructuredOutput(AskResultSchema);

    const result = await structured.invoke([
      {
        role: "system",
        content: system,
      },
      {
        role: "user",
        content: user,
      },
    ]);

    return result;
  } catch (error) {
    console.error("[askStructured]", error);
    throw new Error("Error while trying to get structured response...");
  }
};
