import React from "react";
import { useSelector, useDispatch } from "react-redux";

function WordPuzzle() {
  const letterState = useSelector((state) => {
    return { value: state.value, correctLetters: state.correctLetters };
  });

  const idState = useSelector((state) => {
    return state.id;
  });

  const dispatch = useDispatch();

  function checkCorrectLetters(letter, index) {
    if (!letter) return;
    if (letterState.correctLetters[index] === letter) {
      return "rightPlace";
    } else {
      return "";
    }
  }

  return (
    <section className="puzzle-area">
      <div className="flex-container">
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[0],
            0
          )} ${idState === 0 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 0 });
          }}
        >
          {letterState.value[0]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[1],
            1
          )} ${idState === 1 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 1 });
          }}
        >
          {letterState.value[1]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[2],
            2
          )} ${idState === 2 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 2 });
          }}
        >
          {letterState.value[2]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[3],
            3
          )} ${idState === 3 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 3 });
          }}
        >
          {letterState.value[3]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[4],
            4
          )} ${idState === 4 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 4 });
          }}
        >
          {letterState.value[4]}
        </div>
      </div>
      <div className="flex-container">
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[5],
            5
          )} ${idState === 5 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 5 });
          }}
        >
          {letterState.value[5]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[6],
            6
          )} ${idState === 6 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 6 });
          }}
        >
          {letterState.value[6]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[7],
            7
          )} ${idState === 7 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 7 });
          }}
        >
          {letterState.value[7]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[8],
            8
          )} ${idState === 8 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 8 });
          }}
        >
          {letterState.value[8]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[9],
            9
          )} ${idState === 9 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 9 });
          }}
        >
          {letterState.value[9]}
        </div>
      </div>
      <div className="flex-container">
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[10],
            10
          )} ${idState === 10 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 10 });
          }}
        >
          {letterState.value[10]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[11],
            11
          )} ${idState === 11 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 11 });
          }}
        >
          {letterState.value[11]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[12],
            12
          )} ${idState === 12 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 12 });
          }}
        >
          {letterState.value[12]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[13],
            13
          )} ${idState === 13 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 13 });
          }}
        >
          {letterState.value[13]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[14],
            14
          )} ${idState === 14 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 14 });
          }}
        >
          {letterState.value[14]}
        </div>
      </div>
      <div className="flex-container">
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[15],
            15
          )} ${idState === 15 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 15 });
          }}
        >
          {letterState.value[15]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[16],
            16
          )} ${idState === 16 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 16 });
          }}
        >
          {letterState.value[16]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[17],
            17
          )} ${idState === 17 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 17 });
          }}
        >
          {letterState.value[17]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[18],
            18
          )} ${idState === 18 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 18 });
          }}
        >
          {letterState.value[18]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[19],
            19
          )} ${idState === 19 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 19 });
          }}
        >
          {letterState.value[19]}
        </div>
      </div>
      <div className="flex-container">
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[20],
            20
          )} ${idState === 20 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 20 });
          }}
        >
          {letterState.value[20]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[21],
            21
          )} ${idState === 21 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 21 });
          }}
        >
          {letterState.value[21]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[22],
            22
          )} ${idState === 22 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 22 });
          }}
        >
          {letterState.value[22]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[23],
            23
          )} ${idState === 23 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 23 });
          }}
        >
          {letterState.value[23]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[24],
            24
          )} ${idState === 24 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 24 });
          }}
        >
          {letterState.value[24]}
        </div>
      </div>
      <div className="flex-container">
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[25],
            25
          )} ${idState === 25 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 25 });
          }}
        >
          {letterState.value[25]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[26],
            26
          )} ${idState === 26 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 26 });
          }}
        >
          {letterState.value[26]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[27],
            27
          )} ${idState === 27 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 27 });
          }}
        >
          {letterState.value[27]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[28],
            28
          )} ${idState === 28 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 28 });
          }}
        >
          {letterState.value[28]}
        </div>
        <div
          className={`flex-item digit ${checkCorrectLetters(
            letterState.value[29],
            29
          )} ${idState === 29 ? "active" : ""}`}
          onClick={() => {
            dispatch({ type: "DEFINEID", payload: 29 });
          }}
        >
          {letterState.value[29]}
        </div>
      </div>
    </section>
  );
}

export default WordPuzzle;
