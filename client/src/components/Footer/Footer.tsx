import {
  AiOutlineFacebook,
  AiOutlineGooglePlus,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { logo } from "../../assets/icons";
import {
  StyledFooterContainer,
  StyledFooterLeft,
  StyledFooterMiddle,
  StyledFooterRight,
  StyledIconContainer,
} from "./styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooterContainer>
      <StyledFooterMiddle>
        <StyledFooterLeft>
          <img src={logo} alt="" />
          <p>Made by Interns for Interns. All Rights Reserved &copy; {year}</p>
        </StyledFooterLeft>
        <StyledFooterRight>
          <StyledIconContainer>
            <AiOutlineFacebook />
          </StyledIconContainer>
          <StyledIconContainer>
            <AiOutlineLinkedin />
          </StyledIconContainer>
          <StyledIconContainer>
            <AiOutlineGooglePlus />
          </StyledIconContainer>
        </StyledFooterRight>
      </StyledFooterMiddle>
    </StyledFooterContainer>
  );
};

export default Footer;
