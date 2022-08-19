import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main<{ isOpen: boolean }>`
  padding: calc(${v.smSpacing} * 2);
  width: 100%;
  margin-left: ${({ isOpen }) => (!isOpen ? "6rem" : v.sidebarWidth)};
  h1 {
    font-size: 14px;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${v.smSpacing} ${v.mdSpacing};
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  width: 100%;
  margin-bottom: ${v.smSpacing};

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.mainBlue};
    text-transform: uppercase;
  }
  .admin {
    display: flex;
    align-items: center;

    small {
      font-size: 0.9rem;
      color: #888;
      text-transform: capitalize;
      margin-right: ${v.mdSpacing};
    }
    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
`;

export const SSidebar = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.mdSpacing};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const SSidebarButton = styled.button<{ isOpen: boolean }>`
  ${btnReset};
  position: absolute;
  top: ${v.mdSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-16px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SLogo = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (!isOpen ? `3.3rem` : v.sidebarWidth)};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`;

export const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div<{ isActive?: boolean }>`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg2};
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  transition: all 0.3s ease;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.mainBlue};
  color: white;

  margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`;
export const SThemeToggler = styled.button<{ isActive: boolean }>`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.bg3 : theme.mainBlue};

  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
