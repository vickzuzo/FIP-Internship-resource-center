import { animated } from "react-spring";
import styled, { css } from "styled-components";

export const AccordionContainer = styled.div<{ type?: string; show?: boolean }>`
  background: #fff;
  padding: 0 1rem;
  border-radius: 0.3rem;
  transition: all 0.3s ease;
  margin: 1rem 0;
  user-select: none;
  ${({ type }) =>
    type === "project" &&
    css`
      background: ${({ theme }) => theme.mainLightBlue};
    `}
  ${({ show }) =>
    show &&
    css`
      padding-bottom: 2rem;
    `}
`;

export const AccordionTitle = styled.div<{ type?: string }>`
  margin: 0;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

export const AccordionBody = styled(animated.div)<{ show?: boolean }>`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: 0.3s ease;

  ${({ show }) =>
    show &&
    css`
      height: auto;
    `}
`;
