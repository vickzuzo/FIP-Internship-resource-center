import React from "react";
import { Spinner } from "../Spinner";
import { StyledButtonContainer } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "submit" | "button";
}

const Button = ({
  children,
  isLoading,
  disabled,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <StyledButtonContainer
      isLoading={isLoading}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <Spinner /> : children}
    </StyledButtonContainer>
  );
};

export default Button;
