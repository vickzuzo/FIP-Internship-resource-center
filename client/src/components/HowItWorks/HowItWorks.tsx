import React from "react";
import {
  learningImage,
  registerImage,
  selectResource,
} from "../../assets/images";
import {
  StyledCurrentNumber,
  StyledHowItWorksItemContainer,
  StyledHowItWorksSection,
  StyledLeftContainer,
  StyledRightContainer,
} from "./styles";

type IData = {
  title: string;
  description: string;
  image: string;
  number: number;
}[];

const HowItWorks = () => {
  const data: IData = [
    {
      title: "Register",
      description: "Create an account. then login",
      image: registerImage,
      number: 1,
    },
    {
      title: "Select a resource",
      description: "Select a resource from the list",
      image: selectResource,
      number: 2,
    },
    {
      title: "Start Learning",
      description: "Start learning the resource",
      image: learningImage,
      number: 3,
    },
  ];
  return (
    <StyledHowItWorksSection>
      <h2>How it works</h2>
      {data.map((item, idx) => (
        <StyledHowItWorksItemContainer key={item.number}>
          <StyledLeftContainer>
            <img src={item.image} alt="" />
          </StyledLeftContainer>
          <StyledRightContainer>
            <StyledCurrentNumber>{item.number}</StyledCurrentNumber>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </StyledRightContainer>
        </StyledHowItWorksItemContainer>
      ))}
    </StyledHowItWorksSection>
  );
};

export default HowItWorks;
