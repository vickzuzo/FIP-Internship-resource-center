import styled from "styled-components";

export const StyledSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0px;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  width: 100%;
`;

export const StyledSectionHeaderTitle = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.mainBlue};
`;
