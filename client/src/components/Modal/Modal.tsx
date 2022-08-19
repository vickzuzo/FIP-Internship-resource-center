import React, { useCallback, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSpring, animated } from "react-spring";
import { CloseModalButton, ModalWrapper, StyledModalContainer } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(100%)`,
  });

  const keyPress = useCallback(
    (e: any) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body?.classList.add("modal-open");
    } else {
      body?.classList.remove("modal-open");
    }

    return () => body?.classList.remove("modal-open");
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <StyledModalContainer ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              {children}
              <CloseModalButton aria-label="Close modal" onClick={onClose}>
                <AiOutlineClose />
              </CloseModalButton>
            </ModalWrapper>
          </animated.div>
        </StyledModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
