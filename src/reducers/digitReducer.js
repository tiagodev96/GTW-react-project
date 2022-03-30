import {
  defineRange,
  defineInitialIdByAttempt,
  idIncrement,
  idDecrement,
  wordValidation,
  checkCorrectLetters,
  checkInexistentLetters,
  checkWrongPlaceLetters,
} from "../dataManipulation/dataManipulation";

export let attempt = 1;
export let dailyWord = "FRONT";
export let correctLetters = [];
export let wrongLetters = [];
export let wrongPlaceLetters = [];

const digitInitialState = {
  id: defineInitialIdByAttempt(attempt),
  value: [],
  correctLetters: [],
  inexistentLetters: [],
  wrongPlaceLetters: [],
};

function checkIdClicked(attempt, idClicked) {
  let range = defineRange(attempt);
  if (range.includes(idClicked)) {
    return true;
  }

  return false;
}

function defineIdByClick(attempt, idClicked) {
  if (attempt === 1 && idClicked >= 0 && idClicked < 5) {
    return idClicked;
  }
  if (attempt === 2 && idClicked >= 5 && idClicked < 10) {
    return idClicked;
  }
  if (attempt === 3 && idClicked >= 10 && idClicked < 15) {
    return idClicked;
  }
  if (attempt === 4 && idClicked >= 15 && idClicked < 20) {
    return idClicked;
  }
  if (attempt === 5 && idClicked >= 20 && idClicked < 25) {
    return idClicked;
  }
  if (attempt === 6 && idClicked >= 25) {
    return idClicked;
  }

  return;
}

function checkIfGameOver(letters) {
  function defineArrayByAttempt(array) {
    if (attempt === 1) return array.slice(0, 5);
    if (attempt === 2) return array.slice(5, 10);
    if (attempt === 3) return array.slice(10, 15);
    if (attempt === 4) return array.slice(15, 20);
    if (attempt === 5) return array.slice(20, 25);
    if (attempt === 6) return array.slice(25);
  }
  let attemptArray = defineArrayByAttempt(letters);

  return attemptArray.join("") === dailyWord ? true : false;
}

export default function digitReducer(
  state = digitInitialState,
  { type, payload }
) {
  switch (type) {
    case "INCREASE":
      state.value[state.id] = payload;

      return {
        ...state,
        value: [...state.value],
        id: idIncrement(state.id),
      };

    case "DELETE":
      state.value.splice(state.id, 1);
      let idPopDecrement = idDecrement(state.id);
      return {
        ...state,
        id: idPopDecrement,
        value: [...state.value],
      };

    case "ENTER":
      let wordIsChecked = wordValidation(state.value);
      let checkEndOfTheGame = checkIfGameOver(state.value);
      let correctLetters = checkCorrectLetters(state.value);
      let inexistentLetters = checkInexistentLetters(state.value);
      let wrongPlaceLetters = checkWrongPlaceLetters(state.value);

      if (wordIsChecked) {
        if (checkEndOfTheGame) {
          return {
            ...state,
            correctLetters: correctLetters,
          };
        }
        if (!checkEndOfTheGame && attempt < 6) {
          attempt++;
          return {
            ...state,
            id: defineInitialIdByAttempt(attempt),
            correctLetters: correctLetters,
            inexistentLetters: inexistentLetters,
            wrongPlaceLetters: wrongPlaceLetters,
          };
        }
        if (!checkEndOfTheGame && attempt >= 6) {
          return {
            ...state,
            correctLetters: correctLetters,
          };
        }
      }

      return state;

    case "DEFINEID":
      if (checkIdClicked(attempt, payload)) {
        return { ...state, id: defineIdByClick(attempt, payload) };
      }

      return { ...state, id: state.id };

    default:
      return state;
  }
}
