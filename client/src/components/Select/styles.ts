import styled from "styled-components";
export const StyledSelectContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
`;
export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #888;
  border-radius: 4px;
  padding: 0 0.4rem;
  font-size: 16px;
  color: #333;
  background-color: #fff;

  &:focus {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
`;
