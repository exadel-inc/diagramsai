import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import {
  DiagramBuilderContext,
} from "./state/context";
import { Main } from "./components/main/main";
import { Setup } from "./components/setup/setup";

function App() {
  const state = useContext(DiagramBuilderContext);

  if (state.openaiApiKey) {
    return <Main />;
  }

  return <Setup />;
}

export default App;
