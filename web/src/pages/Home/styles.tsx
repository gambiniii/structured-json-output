import styled, { keyframes } from "styled-components";

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.main`
  min-height: 100vh;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 24px 120px;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: ${fadeDown} 0.5s ease both;
`;

export const Eyebrow = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gray-400, #9a9a9a);
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 700;
  color: var(--color-black);
  line-height: 1.15;
  letter-spacing: -0.03em;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-gray-500);
  line-height: 1.6;
  max-width: 480px;
`;

export const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ResultSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HistoryLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-300);
`;
