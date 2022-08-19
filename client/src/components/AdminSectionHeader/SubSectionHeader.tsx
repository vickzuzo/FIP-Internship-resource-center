import React from "react";
import { StyledSectionHeader, StyledSectionHeaderTitle } from "./styles";

interface IProps {
  title: string;
}

const SubSectionHeader = ({ title }: IProps) => {
  return (
    <StyledSectionHeader>
      <StyledSectionHeaderTitle>{title}</StyledSectionHeaderTitle>
    </StyledSectionHeader>
  );
};

export default SubSectionHeader;
