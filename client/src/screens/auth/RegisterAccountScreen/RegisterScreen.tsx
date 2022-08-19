import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Input, Select } from "../../../components";
import {
  StyledAuthContainer,
  StyledAuthForm,
  StyledBottomText,
} from "../styles";
import { useRegisterAccount } from "./useRegisterAccount";

const RegisterScreen = () => {
  const {
    show,
    handleShowToggle,
    onSubmit,
    handleFieldChange,
    errors,
    fields,
    isDisabled,
    isLoading,
  } = useRegisterAccount();

  return (
    <StyledAuthContainer>
      <StyledAuthForm onSubmit={onSubmit}>
        <h1>Get Started</h1>
        <Input
          placeholder="Full Name"
          type="text"
          label="Full Name"
          name="fullName"
          value={fields.fullName}
          onChange={handleFieldChange}
          error={errors.fullName}
        />
        <Select
          label="Learning Path"
          placeholder="Select Technology"
          name="learningPath"
          onChange={handleFieldChange}
          options={[
            { label: "Front-End", value: "Front-End" },
            { label: "Back-End", value: "Back-End" },
            { label: "UI/UX", value: "UI/UX" },
          ]}
        />
        <Input
          placeholder="Email Address"
          type="email"
          label="Email Address"
          onChange={handleFieldChange}
          name="email"
          value={fields.email}
          error={errors.email}
        />
        <Input
          placeholder="Password"
          type={show ? "text" : "password"}
          label="Password"
          name="password"
          error={errors.password}
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
          REGISTER
        </Button>
        <StyledBottomText>
          <p>Already have an account? </p>
          <Link to="/login">Login</Link>
        </StyledBottomText>
      </StyledAuthForm>
    </StyledAuthContainer>
  );
};

export default RegisterScreen;
