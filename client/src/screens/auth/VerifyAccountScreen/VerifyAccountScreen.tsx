import { Button, Input } from "../../../components";
import { StyledAuthContainer, StyledAuthForm } from "../styles";
import { useVerifyAccount } from "./useVerifyAccount";

const VerifyAccountScreen = () => {
  const { onSubmit, handleFieldChange, errors, fields, isDisabled, isLoading } =
    useVerifyAccount();

  return (
    <StyledAuthContainer>
      <StyledAuthForm onSubmit={onSubmit}>
        <h1>Verify Account</h1>
        <Input
          placeholder="6 Digits Code"
          type="text"
          label="Verification Code"
          name="code"
          value={fields.code}
          onChange={handleFieldChange}
          error={errors.code}
        />
        <Button type="submit" isLoading={isLoading} disabled={isDisabled}>
          VERIFY ACCOUNT
        </Button>
      </StyledAuthForm>
    </StyledAuthContainer>
  );
};

export default VerifyAccountScreen;
