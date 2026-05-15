"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { querySchema, type QueryFormValues } from "./schema";
import {
  Wrapper,
  Label,
  InputRow,
  TextArea,
  SubmitButton,
  Footer,
  FieldError,
  CharCount,
} from "./styles";

const MAX = 500;

type Props = {
  onSubmit: (query: string) => void;
  isLoading: boolean;
};

export default function QueryInput({ onSubmit, isLoading }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<QueryFormValues>({
    resolver: zodResolver(querySchema),
    defaultValues: { query: "" },
  });

  const { ref: hookRef, ...rest } = register("query");

  const value = watch("query");
  const charCount = value?.length ?? 0;

  function autoResize() {
    const el = textAreaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }

  useEffect(() => {
    autoResize();
  }, [value]);

  function onValid(data: QueryFormValues) {
    onSubmit(data.query);
    reset();
  }

  return (
    <Wrapper>
      <Label htmlFor="query-input">Your question</Label>
      <form onSubmit={handleSubmit(onValid)} noValidate>
        <InputRow>
          <TextArea
            id="query-input"
            rows={1}
            placeholder="e.g. What is reinforcement learning?"
            $hasError={!!errors.query}
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(onValid)();
              }
            }}
            {...rest}
            ref={(el) => {
              hookRef(el);
              textAreaRef.current = el;
            }}
          />
          <SubmitButton
            type="submit"
            disabled={isLoading}
            $loading={isLoading}
            aria-label="Send question"
          >
            {isLoading ? (
              <Loader2 size={18} strokeWidth={2.5} />
            ) : (
              <Send size={18} strokeWidth={2.5} />
            )}
          </SubmitButton>
        </InputRow>

        <Footer>
          {errors.query && (
            <FieldError role="alert">{errors.query.message}</FieldError>
          )}
          <CharCount $near={charCount > MAX * 0.85}>
            {charCount}/{MAX}
          </CharCount>
        </Footer>
      </form>
    </Wrapper>
  );
}
