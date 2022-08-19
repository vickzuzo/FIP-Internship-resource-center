import { devices } from "./../../../../styles/Sizes";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 22%;
  padding: 1.5rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s ease;
  margin: 1rem 0px;

  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const StyledIcon = styled.div`
  color: ${({ theme }) => theme.mainBlue};
  font-size: 2.5rem;
`;

export const StyledRightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.mainLightBlue};
  text-transform: uppercase;
`;

export const StyledCount = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.mainBlue};
`;
