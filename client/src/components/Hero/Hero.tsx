import { heroBanner } from "../../assets/images";
import { Button } from "../Button";
import {
  StyledButtonContainer,
  StyledHeroMiddle,
  StyledHeroSectionContainer,
  StyledImageFloat,
  StyledLeftContainer,
  StyledRightContainer,
} from "./styles";

const Hero = () => {
  return (
    <StyledHeroSectionContainer>
      <StyledHeroMiddle>
        <StyledLeftContainer>
          <h1>Join the best thing to happen to summer since summer.</h1>
          <h2>
            At FIP, we provide the teaching and learning experience to interns,
            be it a students or graduate through innovative software and
            technology.
          </h2>
          {/* <StyledInput placeholder="Search For resources" /> */}
          <StyledButtonContainer>
            <Button>Learn More</Button>
          </StyledButtonContainer>
        </StyledLeftContainer>
        <StyledRightContainer>
          <StyledImageFloat bgImage={heroBanner} />
        </StyledRightContainer>
      </StyledHeroMiddle>
    </StyledHeroSectionContainer>
  );
};

export default Hero;
