import { devices } from "./../../../styles/Sizes";
import styled from "styled-components";

export const StyledDashboardCardFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0px;
  flex-wrap: wrap;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;
