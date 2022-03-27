let attempt = 1;
let dailyWord = "FRONT";

function defineRange() {
  if (attempt === 1) return [0, 1, 2, 3, 4];
  if (attempt === 2) return [5, 6, 7, 8, 9];
  if (attempt === 3) return [10, 11, 12, 13, 14];
  if (attempt === 4) return [15, 16, 17, 18, 19];
  if (attempt === 5) return [20, 21, 22, 23, 24];
  if (attempt === 6) return [25, 26, 27, 28, 29];
}

const digitInitialState = {
  id: defineInitialIdByAttempt(attempt),
  value: [],
};

function defineInitialIdByAttempt(attempt) {
  if (attempt === 1) return 0;
  if (attempt === 2) return 5;
  if (attempt === 3) return 10;
  if (attempt === 4) return 15;
  if (attempt === 5) return 20;
  if (attempt === 6) return 25;
}

function idIncrement(id) {
  let range = defineRange(attempt);

  if (range.includes(id) && id < range.slice(-1)[0]) {
    id++;
  } else {
    id = range.slice(-1)[0];
  }

  return id;
}

function idDecrement(id) {
  let range = defineRange(attempt);

  if (range.includes(id) && id > range[0]) {
    id--;
  } else {
    id = range[0];
  }

  return id;
}

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

function wordValidation(letters) {
  let range = defineRange();
  let attemptArray = letters.slice(range[0], range.splice(-1)[0] + 1);

  if (attemptArray.length !== 5) {
    alert("Please enter all five letters");
    return false;
  }

  return true;
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
      if (wordIsChecked) {
        if (!checkEndOfTheGame && attempt < 6) {
          attempt++;
          return {
            ...state,
            id: defineInitialIdByAttempt(attempt),
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
