"use client";

import {
  Card,
  CardHeader,
  QueryBadge,
  ConfidencePill,
  ConfidenceTrack,
  ConfidenceFill,
  Divider,
  SummaryText,
} from "./styles";

type Props = {
  query: string;
  summary: string;
  confidence: number;
};

export default function AnswerCard({ query, summary, confidence }: Props) {
  const pct = Math.max(0, Math.min(1, confidence));
  const label = `${Math.round(pct * 100)}%`;

  return (
    <Card>
      <CardHeader>
        <QueryBadge title={query}>{query}</QueryBadge>
        <ConfidencePill $pct={pct}>
          <ConfidenceTrack>
            <ConfidenceFill $pct={pct} />
          </ConfidenceTrack>
          <span>{label}</span>
        </ConfidencePill>
      </CardHeader>
      <Divider />
      <SummaryText>{summary}</SummaryText>
    </Card>
  );
}
