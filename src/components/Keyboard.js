import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Keyboard() {
  const letterState = useSelector((state) => {
    return {
      inexistentLetters: state.inexistentLetters,
      correctLetters: state.correctLetters,
    };
  });

  const dispatch = useDispatch();

  function defineLetterClass(letter) {
    return letterState.correctLetters.includes(letter)
      ? "correct-key"
      : letterState.inexistentLetters.includes(letter)
      ? "inexistent-key"
      : "";
  }

  useEffect(() => {
    let permitedKeys = [
      "a",
      "A",
      "b",
      "B",
      "c",
      "C",
      "d",
      "D",
      "e",
      "E",
      "f",
      "F",
      "g",
      "G",
      "h",
      "H",
      "i",
      "I",
      "j",
      "J",
      "k",
      "K",
      "l",
      "L",
      "m",
      "M",
      "n",
      "N",
      "o",
      "O",
      "p",
      "P",
      "q",
      "Q",
      "r",
      "R",
      "s",
      "S",
      "t",
      "T",
      "u",
      "U",
      "v",
      "V",
      "w",
      "W",
      "x",
      "X",
      "y",
      "Y",
      "z",
      "Z",
    ];
    document.addEventListener("keydown", (e) => {
      if (permitedKeys.includes(e.key)) {
        e.preventDefault();
        dispatch({ type: "INCREASE", payload: e.key.toUpperCase() });
      } else if (e.key === "Enter") {
        dispatch({ type: "ENTER" });
      } else if (e.key === "Backspace") {
        dispatch({ type: "DELETE" });
      } else if (e.key === "ArrowRight") {
        dispatch({ type: "INCREASE_ID" });
      } else if (e.key === "ArrowLeft") {
        dispatch({ type: "DECREASE_ID" });
      }
    });
  }, [dispatch]);

  return (
    <section className="keyboard-area">
      <div className="keyboard-flex">
        <div className="flex-row">
          <button
            className={`key ${defineLetterClass("Q")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "Q" });
            }}
          >
            <div className="content">Q</div>
          </button>
          <button
            className={`key ${defineLetterClass("W")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "W" });
            }}
          >
            <div className="content">W</div>
          </button>
          <button
            className={`key ${defineLetterClass("E")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "E" });
            }}
          >
            <div className="content">E</div>
          </button>
          <button
            className={`key ${defineLetterClass("R")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "R" });
            }}
          >
            <div className="content">R</div>
          </button>
          <button
            className={`key ${defineLetterClass("T")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "T" });
            }}
          >
            <div className="content">T</div>
          </button>
          <button
            className={`key ${defineLetterClass("Y")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "Y" });
            }}
          >
            <div className="content">Y</div>
          </button>
          <button
            className={`key ${defineLetterClass("U")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "U" });
            }}
          >
            <div className="content">U</div>
          </button>
          <button
            className={`key ${defineLetterClass("I")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "I" });
            }}
          >
            <div className="content">I</div>
          </button>
          <button
            className={`key ${defineLetterClass("O")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "O" });
            }}
          >
            <div className="content">O</div>
          </button>
          <button
            className={`key ${defineLetterClass("P")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "P" });
            }}
          >
            <div className="content">P</div>
          </button>
        </div>
        <div className="flex-row">
          <button
            className={`key ${defineLetterClass("A")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "A" });
            }}
          >
            <div className="content">A</div>
          </button>
          <button
            className={`key ${defineLetterClass("S")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "S" });
            }}
          >
            <div className="content">S</div>
          </button>
          <button
            className={`key ${defineLetterClass("D")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "D" });
            }}
          >
            <div className="content">D</div>
          </button>
          <button
            className={`key ${defineLetterClass("F")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "F" });
            }}
          >
            <div className="content">F</div>
          </button>
          <button
            className={`key ${defineLetterClass("G")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "G" });
            }}
          >
            <div className="content">G</div>
          </button>
          <button
            className={`key ${defineLetterClass("H")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "H" });
            }}
          >
            <div className="content">H</div>
          </button>
          <button
            className={`key ${defineLetterClass("J")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "J" });
            }}
          >
            <div className="content">J</div>
          </button>
          <button
            className={`key ${defineLetterClass("K")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "K" });
            }}
          >
            <div className="content">K</div>
          </button>
          <button
            className={`key ${defineLetterClass("L")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "L" });
            }}
          >
            <div className="content">L</div>
          </button>
          <button
            className="key backspace-key"
            onClick={() => {
              dispatch({ type: "DELETE" });
            }}
          >
            <span class="material-icons content backspace">backspace</span>
          </button>
        </div>
        <div className="flex-row">
          <button
            className={`key ${defineLetterClass("Z")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "Z" });
            }}
          >
            <div className="content">Z</div>
          </button>
          <button
            className={`key ${defineLetterClass("X")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "X" });
            }}
          >
            <div className="content">X</div>
          </button>
          <button
            className={`key ${defineLetterClass("C")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "C" });
            }}
          >
            <div className="content">C</div>
          </button>
          <button
            className={`key ${defineLetterClass("V")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "V" });
            }}
          >
            <div className="content">V</div>
          </button>
          <button
            className={`key ${defineLetterClass("B")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "B" });
            }}
          >
            <div className="content">B</div>
          </button>
          <button
            className={`key ${defineLetterClass("N")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "N" });
            }}
          >
            <div className="content">N</div>
          </button>
          <button
            className={`key ${defineLetterClass("M")}`}
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "M" });
            }}
          >
            <div className="content">M</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "ENTER" });
            }}
          >
            <div className="content enter">ENTER</div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Keyboard;
