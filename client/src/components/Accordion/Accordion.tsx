import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useSpring } from "react-spring";
import { AccordionBody, AccordionContainer, AccordionTitle } from "./styles";

interface AccordionProps {
  title: React.ReactNode;
  content: React.ReactNode;
  type: string;
  isOpen: boolean;
  id: string;
  handleChange: (id: string) => void;
}

const Accordion = ({
  title,
  content,
  type,
  isOpen,
  id,
  handleChange,
}: AccordionProps) => {
  const openAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  return (
    <AccordionContainer type={type} show={isOpen}>
      <AccordionTitle type={type} onClick={() => handleChange(id)}>
        {title}
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </AccordionTitle>
      <AccordionBody style={openAnimation} show={isOpen}>
        {content}
      </AccordionBody>
    </AccordionContainer>
  );
};

export default Accordion;
