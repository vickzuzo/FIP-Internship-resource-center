import styled from "styled-components";
import { devices } from "../../styles";

export const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const ModalWrapper = styled.div`
  min-width: 500px;
  min-height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 2rem;
  @media ${devices.tablet} {
    padding: 4rem 1rem;
    min-width: 400px;
  }
`;

export const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  padding: 0;
  z-index: 10;
`;
