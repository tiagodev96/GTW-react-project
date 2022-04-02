import {
  attempt,
  correctWord,
  correctLetters,
  wrongLetters,
  wrongPlaceLetters,
} from "../reducers/digitReducer";

export function defineRange() {
  if (attempt === 1) return [0, 1, 2, 3, 4];
  if (attempt === 2) return [5, 6, 7, 8, 9];
  if (attempt === 3) return [10, 11, 12, 13, 14];
  if (attempt === 4) return [15, 16, 17, 18, 19];
  if (attempt === 5) return [20, 21, 22, 23, 24];
  if (attempt === 6) return [25, 26, 27, 28, 29];
}

export function defineInitialIdByAttempt(attempt) {
  if (attempt === 1) return 0;
  if (attempt === 2) return 5;
  if (attempt === 3) return 10;
  if (attempt === 4) return 15;
  if (attempt === 5) return 20;
  if (attempt === 6) return 25;
}

export function idIncrement(id) {
  let range = defineRange(attempt);

  if (range.includes(id) && id < range.slice(-1)[0]) {
    id++;
  } else {
    id = range.slice(-1)[0];
  }

  return id;
}

export function idDecrement(id) {
  let range = defineRange(attempt);

  if (range.includes(id) && id > range[0]) {
    id--;
  } else {
    id = range[0];
  }

  return id;
}

export function wordValidation(letters) {
  let range = defineRange();
  let attemptArray = letters.slice(range[0], range.splice(-1)[0] + 1);

  if (attemptArray.length !== 5 || attemptArray.includes("")) {
    alert("Please enter all five letters");
    return false;
  }

  return true;
}

export function checkCorrectLetters(letters) {
  let correctWordArray = correctWord.split("");

  let correctWordIndex = 0;
  let index = defineRange();
  let firstIndex = index[0];
  let limitIndex = index[4];

  for (let i = firstIndex; i <= limitIndex; i++) {
    let correctLetter = letters[i] === correctWordArray[correctWordIndex];
    if (correctLetter) correctLetters[i] = letters[i];
    if (!correctLetter) correctLetters[i] = "";
    correctWordIndex++;
  }
  return correctLetters;
}

export function checkInexistentLetters(letters) {
  let correctWordArray = correctWord.split("");
  let index = defineRange();
  let firstIndex = index[0];
  let limitIndex = index[4];

  for (let i = firstIndex; i <= limitIndex; i++) {
    let letterExistsOnCorrectWord = correctWordArray.includes(letters[i]);
    if (!letterExistsOnCorrectWord) wrongLetters[i] = letters[i];
    if (letterExistsOnCorrectWord) wrongLetters[i] = "";
  }
  return wrongLetters;
}

export function checkWrongPlaceLetters(letters) {
  let correctWordArray = correctWord.split("");

  let correctWordIndex = 0;
  let index = defineRange();
  let firstIndex = index[0];
  let limitIndex = index[4];

  for (let i = firstIndex; i <= limitIndex; i++) {
    let correctLetter = letters[i] === correctWordArray[correctWordIndex];

    let letterExistsOnCorrectWord = correctWordArray.includes(letters[i]);

    let letterOfAttemptOcurrencesOnRightWord = correctWordArray.filter(
      (x) => x === letters[i]
    ).length;

    let ocurrenceOfLetterOnRange =
      wrongPlaceLetters
        .slice(firstIndex, limitIndex + 1)
        .filter((x) => x === letters[i]).length +
      correctLetters
        .slice(firstIndex, limitIndex + 1)
        .filter((x) => x === letters[i]).length;

    if (
      !correctLetter &&
      letterExistsOnCorrectWord &&
      ocurrenceOfLetterOnRange < letterOfAttemptOcurrencesOnRightWord
    ) {
      wrongPlaceLetters[i] = letters[i];
    }

    if (ocurrenceOfLetterOnRange >= letterOfAttemptOcurrencesOnRightWord)
      wrongLetters[i] = letters[i];
    if (correctLetter || !letterExistsOnCorrectWord) {
      wrongPlaceLetters[i] = "";
    }
    correctWordIndex++;
  }
  return wrongPlaceLetters;
}
