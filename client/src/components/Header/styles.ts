import { devices } from "./../../styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &.fixed {
    background: rgba(20, 72, 163, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

export const StyledHeaderMiddle = styled.div`
  width: 85%;
  display: flex;
  padding: 2rem 0px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  position: relative;
  transition: 0.4s ease;

  &.fixed {
    padding: 1rem 0px;
    img {
      width: 7rem;
    }
  }
`;

export const StyledLogo = styled(Link)`
  text-decoration: none;
  img {
    transition: 0.4s ease;
    width: 10rem;
  }
`;

export const StyledNavigationContainer = styled.nav`
  display: flex;
`;

export const StyledNavMobileIcon = styled.div`
  display: none;
  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
  }
`;

export const StyledNavigationLinks = styled.div`
  display: flex;
  align-items: center;
  @media ${devices.tablet} {
    position: absolute;
    top: -60vh;
    transition: 0.4s ease;
    left: 0;
    width: 100%;
    background: rgba(20, 72, 163, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0px;
    &.show {
      height: fit-content;
      top: 100%;
    }
  }
`;

export const StyledNavigationLink = styled(Link)`
  text-decoration: none;
  margin: 0 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${({ theme }) => theme.mainLightBlue};
  }
  &.active {
    color: ${({ theme }) => theme.mainBlue};
    position: relative;
    font-weight: bold;
    transition: 0.4s ease;
    border-radius: 0.3rem;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.mainBlue};
      @media ${devices.tablet} {
        bottom: 0;
        margin-bottom: 0.3rem;
      }
    }

    @media ${devices.tablet} {
      width: 90%;
      margin: 0.4rem auto;
      background: ${({ theme }) => theme.mainLightBlue};
    }
  }

  &.btn {
    background: ${({ theme }) => theme.mainBlue};
    color: #fff;
    border: none;
    padding: 0.6rem 1.7rem;
    transition: 0.4s ease;
    border-radius: 0.2rem;
    :hover {
      border-radius: 1rem 0 1rem 1rem;
    }
    @media ${devices.tablet} {
      width: 90%;
      padding: 1rem;
    }
  }
  &.btn-red {
    background: ${({ theme }) => theme.mainRed};
    color: #fff;
  }

  @media ${devices.tablet} {
    width: 100%;
    padding: 1rem 0px;
    :hover {
      background: ${({ theme }) => theme.mainLightBlue};
    }
  }
`;
