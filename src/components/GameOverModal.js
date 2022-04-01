import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { correctWord } from "../reducers/digitReducer";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const modalState = useSelector((state) => {
    return {
      isGameOver: state.isGameOver,
      isGameWon: state.gameWon,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      return modalState.isGameOver
        ? setIsModalOpen(true)
        : setIsModalOpen(false);
    }, 800);
  }, [modalState.isGameOver]);

  function defineModalContent() {
    const title = modalState.isGameWon
      ? "Congratulations! You found the word"
      : "You Lose! Better luck next time!";
    let subtitle = `The word is "${correctWord}"`;

    return { title, subtitle };
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  document.addEventListener("click", (e) => {
    return e.target.matches(".modal-overlay") ? closeModal() : "";
  });

  return (
    <div className={`modal-overlay ${isModalOpen ? "" : "hide"}`}>
      <div className="modal-content">
        <h2 className="modal-title">{defineModalContent().title}</h2>
        <h4 className="modal-subtitle">{defineModalContent().subtitle}</h4>
        <button
          onClick={() => {
            closeModal();
            dispatch({ type: "RESTARTGAME" });
          }}
          className="modal-close-button"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
