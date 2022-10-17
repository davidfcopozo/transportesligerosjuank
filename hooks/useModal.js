import { useState, useEffect } from "react";

const useModal = (initialValue) => {
  const [isOpen, setIsOpen] = useState((initialValue = false));

  /* if (typeof "window" !== "undefined") {
    window.addEventListener("resize", () => {
      let screenWidth = window.innerWidth;
      console.log(screenWidth);
    });
  } */

  /* useEffect(() => {
    let screenWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      console.log(screenWidth);
    });
  }); */

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
