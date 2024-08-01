import { useEffect, useState } from "react";
import css from "./Modal.module.css";

const Modal = ({ onCloseModal }) => {
  const [counter, setCounter] = useState(() => {
    return Number(localStorage.getItem("counter") ?? 0);
  });

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  // Этап монтування.
  useEffect(() => {
    const handleKeyDown = () => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Этап розмонтування
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div onClick={handleBackDropClick} className={css.backdrop}>
      <div className={css.modal}>
        <button
          className={css.closeModalBtn}
          type="button"
          aria-label="Close modal window"
          onClick={onCloseModal}
        >
          &times;
        </button>
        <h3 className={css.title}>Modal</h3>
        <p className={css.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, rem!
        </p>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Click to increment: {counter}
        </button>
      </div>
    </div>
  );
};

export default Modal;
