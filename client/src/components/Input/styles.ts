import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  margin: 1rem 0px;
`;

export const StyledInputFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #888;
  border-radius: 4px;
  padding: 1rem;
  :hover,
  :focus {
    border-radius: 0.8rem 0 0.8rem 0.8rem;
  }
`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 10px; */
`;

export const StyledInput = styled.input`
  width: 90%;
  /* padding: 1rem; */
  background: transparent;
  font-size: 0.9rem;
  outline: none;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
`;

export const StyledInputError = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
