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
import { englishWords } from "../dictionaries/englishWords";
import Foswig from "foswig";

let englishArray = englishWords.map((x) => x.toLocaleUpperCase());
let chain = new Foswig(3, englishArray);
const constraints = { minLength: 5, maxLength: 5 };

export let attempt = 1;
export let correctWord = chain.generate(constraints);
console.log("🚀 ~ file: digitReducer.js ~ line 20 ~ correctWord", correctWord);
export let correctLetters = [];
export let wrongLetters = [];
export let wrongPlaceLetters = [];

const digitInitialState = {
  id: defineInitialIdByAttempt(attempt),
  value: [],
  correctLetters: [],
  inexistentLetters: [],
  wrongPlaceLetters: [],
  isGameOver: false,
  gameWon: false,
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

  return attemptArray.join("") === correctWord ? true : false;
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

      if (wordIsChecked) {
        let correctLetters = checkCorrectLetters(state.value);
        let inexistentLetters = checkInexistentLetters(state.value);
        let wrongPlaceLetters = checkWrongPlaceLetters(state.value);

        if (checkEndOfTheGame || attempt >= 6) {
          let isGameWon = checkEndOfTheGame ? true : false;
          return {
            ...state,
            correctLetters: correctLetters,
            inexistentLetters: inexistentLetters,
            wrongPlaceLetters: wrongPlaceLetters,
            isGameOver: true,
            gameWon: isGameWon,
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

    case "RESTARTGAME":
      attempt = 1;
      correctWord = chain.generate(constraints);
      correctLetters = [];
      wrongLetters = [];
      wrongPlaceLetters = [];

      return {
        id: defineInitialIdByAttempt(attempt),
        value: [],
        correctLetters: [],
        inexistentLetters: [],
        wrongPlaceLetters: [],
        isGameOver: false,
        gameWon: false,
      };

    default:
      return state;
  }
}
