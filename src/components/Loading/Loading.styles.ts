import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Dot = styled.div<{ delay: string }>`
  width: 16px;
  height: 16px;
  background-color: #333;
  border-radius: 50%;
  margin: 0 8px;
  animation: ${jump} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.delay};
`;