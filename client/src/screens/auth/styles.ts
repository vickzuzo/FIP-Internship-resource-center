import { devices } from "./../../styles";
import styled from "styled-components";
export const StyledAuthContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  height: 80vh;
`;

export const StyledAuthForm = styled.form`
  display: flex;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border-radius: 0.7rem;
  padding: 2rem 4rem;
  h1 {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  @media ${devices.tablet} {
    width: 92%;
    padding: 2rem;
  }
`;
export const StyledBottomText = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.mainBlue};
    margin-left: 0.2rem;
    font-weight: bold;
  }
`;
