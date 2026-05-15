"use client";

import { AlertCircle } from "lucide-react";
import { ErrorBox, IconWrap, ErrorText } from "./styles";

type Props = { message?: string };

export default function ErrorMessage({ message }: Props) {
  return (
    <ErrorBox role="alert">
      <IconWrap>
        <AlertCircle size={20} strokeWidth={2} />
      </IconWrap>
      <ErrorText>
        {message ?? "Something went wrong. Make sure the API is running and try again."}
      </ErrorText>
    </ErrorBox>
  );
}
