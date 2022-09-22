import { useState } from "react";

const useModal = (initialValue) => {
  const [isOpen, setIsOpen] = useState((initialValue = false));

  const closeModal = () => {
    setIsOpen(false);
    console.log(isOpen);
  };
  const openModal = () => {
    setIsOpen(true);
    console.log(isOpen);
  };

  return [isOpen, closeModal, openModal];
};

export default useModal;
