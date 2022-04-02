import { Provider } from "react-redux";
import { createStore } from "redux";
import digitReducer from "./reducers/digitReducer";
import Navbar from "./components/Navbar";
import WordPuzzle from "./components/WordPuzzle";
import Keyboard from "./components/Keyboard";
import GameOverModal from "./components/GameOverModal";
import InstructionModal from "./components/InstructionModal";
import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/WordPuzzle.css";
import "./styles/Keyboard.css";
import "./styles/Modal.css";

function App() {
  const store = createStore(digitReducer);

  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <WordPuzzle />
        <Keyboard />
        <GameOverModal />
        <InstructionModal />
      </Provider>
    </div>
  );
}

export default App;
