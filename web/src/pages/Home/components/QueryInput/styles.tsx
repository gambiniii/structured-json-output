import styled, { css, keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.div`
  animation: ${fadeUp} 0.5s ease both;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-500);
  margin-bottom: 10px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
  flex: 1;
  resize: none;
  border: 1.5px solid ${({ $hasError }) =>
    $hasError ? "#dc2626" : "var(--color-gray-100)"};
  border-radius: var(--radius-md);
  padding: 14px 16px;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-black);
  background: var(--color-white);
  outline: none;
  min-height: 54px;
  max-height: 200px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: var(--color-gray-300);
  }

  &:focus {
    border-color: var(--color-gray-900);
    box-shadow: 0 0 0 3px rgba(13, 13, 13, 0.06);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  min-height: 18px;
`;

export const FieldError = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #dc2626;
`;

export const CharCount = styled.span<{ $near?: boolean }>`
  font-size: 0.72rem;
  font-weight: 400;
  color: ${({ $near }) =>
    $near ? "var(--color-gray-700)" : "var(--color-gray-300)"};
  margin-left: auto;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SubmitButton = styled.button<{ $loading?: boolean }>`
  flex-shrink: 0;
  width: 54px;
  height: 54px;
  border-radius: var(--radius-md);
  background: var(--color-black);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.15s;
  position: relative;

  &:hover:not(:disabled) {
    background: var(--color-gray-900);
    transform: scale(1.04);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    ${({ $loading }) =>
      $loading &&
      css`
        animation: ${spin} 0.9s linear infinite;
      `}
  }
`;
