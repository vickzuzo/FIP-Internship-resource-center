import { devices } from "./../../styles/Sizes";
import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.mainLightBlue};
  background: ${({ theme }) => theme.mainBlue};
`;

export const StyledFooterMiddle = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  @media ${devices.tablet} {
    width: 92%;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledFooterLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 10rem;
  }
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.mainLightBlue};
    font-weight: bold;
    margin-top: 1rem;
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const StyledFooterRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${devices.tablet} {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const StyledIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.mainLightBlue};
  transition: 0.4s ease;
  :hover {
    border-radius: 1rem 0 1rem 1rem;
    background: ${({ theme }) => theme.mainLightBlue};
    color: #fff;
  }
`;
