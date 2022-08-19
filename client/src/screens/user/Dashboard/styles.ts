import { devices } from "./../../../styles/Sizes";
import styled, { css } from "styled-components";

export const StyledDashboardContainer = styled.div`
  /* display: flex; */
  width: 80%;
  margin: 10rem auto;
  @media ${devices.tablet} {
    width: 85%;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 1rem 0px;
    font-weight: bold;
  }
`;

export const StyledDashboardCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const StyledDashboardCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background: #fff;
  border-radius: 0.5rem;
  width: 47%;
  padding: 2rem;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;

  .title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const StyledCoursesBottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5rem;
`;

export const StyledButtonContainer = styled.div`
  width: 50%;
`;

export const StyledAccordionTitle = styled.div`
  margin: 0;
`;

export const StyledType = styled.p<{ type: string }>`
  margin-bottom: 1rem;
  width: 10rem;
  text-align: center;
  ${({ type }) =>
    type === "project" &&
    css`
      color: ${({ theme }) => theme.mainLightBlue};
      background: ${({ theme }) => theme.mainBlue};
      padding: 0.5rem;
      border-radius: 0.3rem;
    `}
  ${({ type }) =>
    type === "course" &&
    css`
      color: ${({ theme }) => theme.mainBlue};
      background: ${({ theme }) => theme.mainLightBlue};
      padding: 0.5rem;
      border-radius: 0.3rem;
    `}
`;

export const StyledContent = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  .description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .topic {
    font-size: 1.1rem;
    font-weight: bold;
  }
  a.item {
    display: block;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    color: inherit;
  }

  .item {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .left {
    width: 65%;
  }
  .right {
    width: 33%;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }
`;

export const StyledMentorTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 1rem;
  width: 100%;

  .container {
    width: 55%;
    p.mentor-name {
      line-break: anywhere;
      font-size: 0.8rem;
    }
    .title {
      font-weight: bold;
      font-size: 1rem;
    }
    .level {
      font-size: 0.8rem;
      color: #888;
      margin-top: 0.4rem;
    }
  }

  .btn_container {
    width: 40%;
    button {
      padding: 0.8rem;
    }
  }
`;

export const StyledMentorBottomContainer = styled.div`
  margin: 1.5rem 1rem;
  display: flex;
  justify-content: flex-end;
  ${StyledButtonContainer} {
    width: 30%;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;

    :hover {
      opacity: 1;
    }

    button {
      padding: 0.8rem;
    }
  }
`;

export const StyledUserWelcomeContainer = styled.div`
  margin: 2rem 0px;
  h1 {
    font-size: 1.7rem;
  }
  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.mainBlue};
  }
`;
