import React, { useRef, useState } from "react";
import {
  StyledHeaderContainer,
  StyledHeaderMiddle,
  StyledLogo,
  StyledNavigationContainer,
  StyledNavigationLink,
  StyledNavigationLinks,
  StyledNavMobileIcon,
} from "./styles";
import { AiOutlineClose, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { logo } from "../../assets/icons";
import { useLocation } from "react-router-dom";
import { useOnClickOutside } from "../../hooks";
import { useGetCurrentUser } from "../../network";
import { Spinner } from "../Spinner";

interface IHeaderProps {
  show: boolean;
  handleShow: (bool?: boolean) => void;
}

const Header = ({ show, handleShow }: IHeaderProps) => {
  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setFixed(true);
      return;
    }
    setFixed(false);
  };

  window.addEventListener("scroll", handleScroll);

  const { pathname } = useLocation();

  const checkActive = (path: string, classname?: string) => {
    return path === pathname ? "active" : classname ?? "";
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => handleShow(false));

  const isLoggedIn = localStorage.getItem("access_token") !== null;

  const { user, isLoading } = useGetCurrentUser();

  return (
    <StyledHeaderContainer className={fixed ? "fixed" : ""}>
      <StyledHeaderMiddle className={fixed ? "fixed" : ""}>
        <StyledLogo to="/">
          <img src={logo} alt="" />
        </StyledLogo>
        <StyledNavigationContainer>
          <StyledNavMobileIcon onClick={() => handleShow()}>
            {show ? <AiOutlineClose /> : <AiOutlineMenu />}
          </StyledNavMobileIcon>
          <StyledNavigationLinks ref={menuRef} className={show ? "show" : ""}>
            <StyledNavigationLink
              to="/"
              onClick={() => handleShow(false)}
              className={checkActive("/")}
            >
              Home
            </StyledNavigationLink>
            <StyledNavigationLink
              to="/resources"
              onClick={() => handleShow(false)}
              className={checkActive("/resources")}
            >
              Resources
            </StyledNavigationLink>
            <StyledNavigationLink
              to="/how-it-works"
              onClick={() => handleShow(false)}
              className={checkActive("/how-it-works")}
            >
              How It Works
            </StyledNavigationLink>
            <StyledNavigationLink
              to="/teams"
              onClick={() => handleShow(false)}
              className={checkActive("/teams")}
            >
              Teams
            </StyledNavigationLink>
            {isLoggedIn ? (
              <>
                <StyledNavigationLink
                  to={user.type !== "intern" ? "/admin/dashboard" : "/me"}
                  onClick={() => handleShow(false)}
                  className="btn"
                >
                  {isLoading ? <Spinner /> : "Dashboard"}
                </StyledNavigationLink>
                <StyledNavigationLink
                  to="/"
                  onClick={() => {
                    handleShow(false);
                    localStorage.clear();
                  }}
                  className="btn btn-red"
                >
                  <AiOutlineLogout />
                  {/* Logout */}
                </StyledNavigationLink>
              </>
            ) : (
              <StyledNavigationLink
                to="/login"
                onClick={() => handleShow(false)}
                className="btn"
              >
                Login
              </StyledNavigationLink>
            )}
          </StyledNavigationLinks>
        </StyledNavigationContainer>
      </StyledHeaderMiddle>
    </StyledHeaderContainer>
  );
};

export default Header;
