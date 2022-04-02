import React, { useState } from "react";

function InstructionModal() {
  const [isInstructionOpen, setIsInstructionOpen] = useState(true);

  function closeModal() {
    setIsInstructionOpen(false);
  }

  document.addEventListener("click", (e) => {
    return e.target.matches(".modal-overlay") ? closeModal() : "";
  });

  return (
    <div className={`modal-overlay ${isInstructionOpen ? "" : "hide"}`}>
      <div className="modal-content-instructions">
        <h2 className="modal-title">Instructions</h2>
        <p className="modal-description">Guess the Word in 6 tries</p>
        <p className="modal-description">
          Each guess must be a 5 letter word. Hit the enter button to submit.
        </p>
        <p className="modal-description">
          After each guess, the color of the tiles will change to show how your
          guess was to the word.
        </p>
        <div className="horizontal-line-break"></div>

        <h2 className="modal-description">Examples</h2>

        <div className="word-example">
          <div className="letter-example letter1">W</div>
          <div className="letter-example">O</div>
          <div className="letter-example">R</div>
          <div className="letter-example">D</div>
          <div className="letter-example">S</div>
        </div>
        <p className="modal-description">
          The letter "W" is in the word and in the correct spot.
        </p>

        <div className="word-example">
          <div className="letter-example">W</div>
          <div className="letter-example">A</div>
          <div className="letter-example">T</div>
          <div className="letter-example letter4">C</div>
          <div className="letter-example">H</div>
        </div>
        <p className="modal-description">
          The letter "C" is in the word but in the wrong spot.
        </p>

        <div className="word-example">
          <div className="letter-example">H</div>
          <div className="letter-example letter2">A</div>
          <div className="letter-example">P</div>
          <div className="letter-example">P</div>
          <div className="letter-example">Y</div>
        </div>
        <p className="modal-description">
          The letter "A" is not in the word in any spot.
        </p>

        <button
          onClick={() => {
            closeModal();
          }}
          className="modal-close-button"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default InstructionModal;
