import React from "react";
import {
  StyledGainIcon,
  StyledGainItem,
  StyledGetStartedButton,
  StyledLeftContainer,
  StyledRightContainer,
  StyledWhatYouGainSectionContainer,
} from "./styles";
import { BiArrowToRight } from "react-icons/bi";
import { AiFillAccountBook } from "react-icons/ai";

const WhatYouGain = () => {
  return (
    <StyledWhatYouGainSectionContainer>
      <StyledLeftContainer>
        <h1>What you gain from FIP</h1>
        <p>
          FIP receives applications from different interns. We're not only
          targeting our interns on the background of the student.
        </p>
        <StyledGetStartedButton>
          <span>Get Started Now!</span>
          <BiArrowToRight />
        </StyledGetStartedButton>
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledGainItem>
          <StyledGainIcon>
            <AiFillAccountBook />
          </StyledGainIcon>
          <h2>Trust</h2>
          <p>
            We want to work with people that strongly believe in our way to
            work.
          </p>
        </StyledGainItem>
        <StyledGainItem>
          <StyledGainIcon>
            <AiFillAccountBook />
          </StyledGainIcon>
          <h2>Fast</h2>
          <p>we want out interns to get the job done quickly.</p>
        </StyledGainItem>
        <StyledGainItem>
          <StyledGainIcon>
            <AiFillAccountBook />
          </StyledGainIcon>
          <h2>Quality</h2>
          <p>At FIP, we believe in quality over quantity.</p>
        </StyledGainItem>
        <StyledGainItem>
          <StyledGainIcon>
            <AiFillAccountBook />
          </StyledGainIcon>
          <h2>Team / Communication</h2>
          <p>
            At FIP, we train you on communication and working in teams to
            improve and mimic live experience.
          </p>
        </StyledGainItem>
      </StyledRightContainer>
    </StyledWhatYouGainSectionContainer>
  );
};

export default WhatYouGain;
