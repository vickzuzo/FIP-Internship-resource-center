import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Input } from "../../../components";
import {
  StyledAuthContainer,
  StyledAuthForm,
  StyledBottomText,
} from "../styles";
import { useLogin } from "./useLogin";

const LoginScreen = () => {
  const {
    show,
    handleShowToggle,
    onSubmit,
    handleFieldChange,
    errors,
    fields,
    isDisabled,
    isLoading,
  } = useLogin();

  return (
    <StyledAuthContainer>
      <StyledAuthForm onSubmit={onSubmit}>
        <h1>Welcome back</h1>
        <Input
          placeholder="Email Address"
          type="email"
          label="Email Address"
          name="email"
          value={fields.email}
          error={errors.email}
          onChange={handleFieldChange}
        />
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          error={errors.password}
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          rightIcon={
            <div onClick={handleShowToggle}>
              {show ? (
                <AiOutlineEyeInvisible style={{ cursor: "pointer" }} />
              ) : (
                <AiOutlineEye style={{ cursor: "pointer" }} />
              )}
            </div>
          }
        />
        <Button type="submit" disabled={isDisabled} isLoading={isLoading}>
          LOGIN
        </Button>
        <StyledBottomText>
          <p>Don't have an account? </p>
          <Link to="/create-account">Create an account</Link>
        </StyledBottomText>
      </StyledAuthForm>
    </StyledAuthContainer>
  );
};

export default LoginScreen;
