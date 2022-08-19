import styled from "styled-components";
import { v } from "../../styles/variables";

export const STable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: ${v.borderRadius};
  overflow: hidden;
`;

export const STHead = styled.thead`
  position: sticky;
  z-index: 100;
`;

export const STHeadTR = styled.tr`
  background: ${({ theme }) => theme.bg};
`;

export const STH = styled.th`
  font-weight: normal;
  padding: ${v.smSpacing};
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;

  :not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.bg2};
  }
  :first-of-type {
    width: 1%;
    white-space: nowrap;
  }
`;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
  background: ${({ theme }) => theme.white};
`;

export const STD = styled.td`
  padding: ${v.mdSpacing};
  border: 1px solid ${({ theme }) => theme.bg2};
  font-size: 14px;
`;

export const StyledButton = styled.div`
  width: 8rem;
  margin: 0 1rem;
  &.delete {
    button {
      background-color: ${({ theme }) => theme.mainRed};
    }
  }
  &.edit {
    button {
      background-color: ${({ theme }) => theme.mainYellow};
    }
  }
  button {
    padding: 0.5rem 0;
  }
`;

export const StyledBtnFlex = styled.div`
  display: flex;
  align-items: center;
`;
