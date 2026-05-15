import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const SkeletonCard = styled.div`
  animation: ${fadeIn} 0.3s ease both;
  background: var(--color-white);
  border: 1.5px solid var(--color-gray-100);
  border-radius: var(--radius-lg);
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SkeletonLine = styled.div<{ $w?: string; $h?: string }>`
  height: ${({ $h }) => $h ?? "14px"};
  width: ${({ $w }) => $w ?? "100%"};
  border-radius: var(--radius-full);
  background: linear-gradient(
    90deg,
    var(--color-gray-100) 25%,
    var(--color-gray-50) 50%,
    var(--color-gray-100) 75%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
`;

export const SkeletonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-gray-100);
  margin: 0;
`;

export const SkeletonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
