import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export type AskResponse = {
  summary: string;
  confidence: number;
};

export async function askQuestion(query: string): Promise<AskResponse> {
  const { data } = await api.post<AskResponse>("/ask", { query });
  return data;
}
