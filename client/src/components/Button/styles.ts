import styled from "styled-components";

export const StyledButtonContainer = styled.button<{ isLoading?: boolean }>`
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.mainBlue};
  color: #fff;
  font-size: 1rem;
  padding: 1.4rem 0px;
  width: 100%;
  transition: 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    border-radius: 0.8rem 0 0.8rem 0.8rem;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ isLoading }) =>
    isLoading &&
    `
    cursor: not-allowed;
    opacity: 0.7;
  `}
`;
