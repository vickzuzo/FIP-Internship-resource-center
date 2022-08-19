import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.3);
  border-top: 0.2em solid ${({ theme }) => theme.mainLightBlue};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: ${spin} 0.6s linear infinite;
`;
