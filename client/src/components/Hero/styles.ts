import { devices } from "./../../styles/Sizes";
import styled from "styled-components";

export const StyledHeroSectionContainer = styled.section`
  height: 85vh;
  background-color: #fff;
  width: 100%;
  transform: skew(0, -4.76deg) translateY(calc(50vw / -12));
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    transform: skew(0, 4.76deg) translateY(calc(50vw / 12));
    margin-top: calc(50vw / -12);
  }
`;
export const StyledHeroMiddle = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledLeftContainer = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  h2 {
    font-size: 1.1rem;
  }
  @media ${devices.tablet} {
    width: 80%;
    margin-bottom: 4rem;
    h1 {
      font-size: 2rem;
    }
  }
`;
export const StyledRightContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
  }
  @media ${devices.tablet} {
    justify-content: center;
    width: 80%;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 30%;
  margin: 2rem 0px;
  button {
    padding: 1rem 2rem;
  }
`;

export const StyledInput = styled.input`
  width: 50%;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 0.3rem;
  padding: 1rem;
  transition: 0.4s ease;
  margin: 1.4rem 0;
  :hover,
  :focus {
    border-radius: 1rem 0 1rem 1rem;
  }
  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const StyledImageFloat = styled.div<{ bgImage: string }>`
  width: 70%;
  background-image: url(${({ bgImage }) => bgImage});
  /* background-image: url("https://uploads-ssl.webflow.com/606c1bd6b947503e4c755fe2/607d4d79587ad9153343ab0f_FS-hero%402x.png"); */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  /* border-radius: 2rem 0 2rem 2rem; */
  height: 30rem;
`;
