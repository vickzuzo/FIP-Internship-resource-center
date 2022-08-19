import { devices } from "./../../styles/Sizes";
import styled from "styled-components";
import { lighten } from "polished";

export const StyledWhatYouGainSectionContainer = styled.section`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  @media ${devices.tablet} {
    width: 85%;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLeftContainer = styled.div`
  width: 30%;
  h1 {
    font-size: 1.7rem;
  }
  p {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: ${lighten(0.7, `#000`)};
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const StyledGetStartedButton = styled.button`
  background: transparent;
  margin-top: 2rem;
  padding: 1rem;
  cursor: pointer;
  transition: 0.4s ease;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.mainLightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-left: 0.5rem;
    transition: 0.3s ease;
  }
  :hover {
    background: ${({ theme }) => theme.mainLightBlue};
    border-radius: 1rem 0 1rem 1rem;
    color: #fff;
    svg {
      margin-left: 1rem;
    }
  }
`;

export const StyledRightContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const StyledGainItem = styled.div`
  width: 30%;
  background: #fff;
  margin: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :hover {
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  @media ${devices.tablet} {
    width: 100%;
    margin: 1rem 0px;
  }
  h2 {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  p {
    font-size: 0.8rem;
    margin-top: 0.8rem;
    color: ${lighten(0.7, `#000`)};
  }
`;

export const StyledGainIcon = styled.div`
  width: 3.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.mainBlue};
  background: ${({ theme }) => theme.mainLightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 1rem;
`;
