import { useState } from "react";

export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = () => setIsOpen(!isOpen);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  return { isOpen, toggle, onClose, onOpen };
};
