"use client";

import { useMutation } from "@tanstack/react-query";
import { askQuestion, type AskResponse } from "@/services/api";

export function useAsk() {
  return useMutation<AskResponse, Error, string>({
    mutationFn: (query: string) => askQuestion(query),
  });
}
