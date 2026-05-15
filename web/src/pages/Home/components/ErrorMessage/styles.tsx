import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-6px); }
  40%       { transform: translateX(6px); }
  60%       { transform: translateX(-4px); }
  80%       { transform: translateX(4px); }
`;

export const ErrorBox = styled.div`
  border: 1.5px solid #fca5a5;
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  animation: ${shake} 0.4s ease both;
  background: #fff1f1;
`;

export const IconWrap = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: #dc2626;
  margin-top: 1px;
`;

export const ErrorText = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #dc2626;
  line-height: 1.5;
`;
