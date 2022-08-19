import { lighten } from "polished";
import { devices } from "./../../styles/Sizes";
import styled from "styled-components";

export const StyledHowItWorksSection = styled.section`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    width: 85%;
  }
  h2 {
    text-align: center;
  }
`;

export const StyledLeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 50%;
    height: auto;
  }
  @media ${devices.tablet} {
    width: 100%;
    img {
      width: 50%;
    }
  }
`;

export const StyledRightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.mainBlue};
    font-weight: bold;
    margin-top: 1rem;
  }
  p {
    font-size: 0.8rem;
    color: ${lighten(0.7, "#000")};
    margin-top: 0.7rem;
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const StyledCurrentNumber = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  padding: 1.4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.mainLightBlue};
  color: ${({ theme }) => theme.mainBlue};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${devices.tablet} {
    margin-top: 2rem;
    width: 4.7rem;
    height: 4.7rem;
    font-size: 1.5rem;
  }
`;

export const StyledHowItWorksItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0;
  align-items: center;
  justify-content: space-between;
  /* :nth-of-type(even) {
    flex-direction: row-reverse;
  } */
  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;
