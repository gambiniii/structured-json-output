import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Card = styled.article`
  animation: ${slideIn} 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
  background: var(--color-white);
  border: 1.5px solid var(--color-gray-100);
  border-radius: var(--radius-lg);
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const QueryBadge = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-gray-500);
  background: var(--color-gray-50);
  border: 1px solid var(--color-gray-100);
  border-radius: var(--radius-full);
  padding: 4px 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 260px;
`;

export const ConfidencePill = styled.div<{ $pct: number }>`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ $pct }) =>
      $pct >= 0.75
        ? "var(--color-gray-900)"
        : $pct >= 0.5
        ? "var(--color-gray-700)"
        : "var(--color-gray-500)"};
  }
`;

export const ConfidenceTrack = styled.div`
  width: 80px;
  height: 4px;
  border-radius: var(--radius-full);
  background: var(--color-gray-100);
  overflow: hidden;
`;

const grow = (pct: number) => keyframes`
  from { width: 0; }
  to   { width: ${pct * 100}%; }
`;

export const ConfidenceFill = styled.div<{ $pct: number }>`
  height: 100%;
  border-radius: var(--radius-full);
  background: var(--color-black);
  animation: ${({ $pct }) => grow($pct)} 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
  width: ${({ $pct }) => $pct * 100}%;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-gray-100);
  margin: 0;
`;

export const SummaryText = styled.p`
  font-size: 0.975rem;
  font-weight: 400;
  line-height: 1.75;
  color: var(--color-dark);
`;
