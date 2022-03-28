import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Keyboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    let permitedKeys = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    document.addEventListener("keydown", (e) => {
      if (permitedKeys.includes(e.key)) {
        e.preventDefault();
        dispatch({ type: "INCREASE", payload: e.key.toUpperCase() });
      } else if (e.key === "Enter") {
        dispatch({ type: "ENTER" });
      } else if (e.key === "Backspace") {
        dispatch({ type: "DELETE" });
      }
    });
  });

  return (
    <section className="keyboard-area">
      <div className="keyboard-flex">
        <div className="flex-row">
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "Q" });
            }}
          >
            <div className="content">Q</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "W" });
            }}
          >
            <div className="content">W</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "E" });
            }}
          >
            <div className="content">E</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "R" });
            }}
          >
            <div className="content">R</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "T" });
            }}
          >
            <div className="content">T</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "Y" });
            }}
          >
            <div className="content">Y</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "U" });
            }}
          >
            <div className="content">U</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "I" });
            }}
          >
            <div className="content">I</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "O" });
            }}
          >
            <div className="content">O</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "P" });
            }}
          >
            <div className="content">P</div>
          </button>
        </div>
        <div className="flex-row">
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "A" });
            }}
          >
            <div className="content">A</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "S" });
            }}
          >
            <div className="content">S</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "D" });
            }}
          >
            <div className="content">D</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "F" });
            }}
          >
            <div className="content">F</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "G" });
            }}
          >
            <div className="content">G</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "H" });
            }}
          >
            <div className="content">H</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "J" });
            }}
          >
            <div className="content">J</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "K" });
            }}
          >
            <div className="content">K</div>
          </button>
          <button
            className="key"
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
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "Z" });
            }}
          >
            <div className="content">Z</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "X" });
            }}
          >
            <div className="content">X</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "C" });
            }}
          >
            <div className="content">C</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "V" });
            }}
          >
            <div className="content">V</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "B" });
            }}
          >
            <div className="content">B</div>
          </button>
          <button
            className="key"
            onClick={() => {
              dispatch({ type: "INCREASE", payload: "N" });
            }}
          >
            <div className="content">N</div>
          </button>
          <button
            className="key"
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
