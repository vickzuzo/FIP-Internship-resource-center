import React from "react";
import {
  StyledInput,
  StyledInputContainer,
  StyledInputError,
  StyledInputFlex,
  StyledLabel,
} from "./styles";

interface InputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  value?: string;
  placeholder: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: HTMLInputElement["type"];
  error?: string;
}

const Input = ({
  leftIcon,
  rightIcon,
  value,
  placeholder,
  label,
  onChange,
  name,
  type,
  error,
}: InputProps) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputFlex>
        {leftIcon}
        <StyledInput
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {rightIcon}
      </StyledInputFlex>
      {error && <StyledInputError>{error}</StyledInputError>}
    </StyledInputContainer>
  );
};

export default Input;
