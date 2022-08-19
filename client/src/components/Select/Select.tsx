import { StyledInputError } from "../Input/styles";
import { StyledLabel, StyledSelect, StyledSelectContainer } from "./styles";

interface SelectProps {
  label: string;
  placeholder?: string;
  options: { label: string; value: any }[];
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const Select = ({
  label,
  placeholder,
  options,
  onChange,
  name,
  error,
}: SelectProps) => {
  return (
    <StyledSelectContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect
        placeholder={placeholder ?? "Select one"}
        name={name}
        onChange={onChange}
      >
        <option value="">select an option</option>
        {options.map((option, idx) => (
          <option value={option.value} key={`${option.label}${idx}`}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {error && <StyledInputError>{error}</StyledInputError>}
    </StyledSelectContainer>
  );
};

export default Select;
