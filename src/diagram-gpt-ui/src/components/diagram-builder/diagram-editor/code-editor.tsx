import CodeMirror from "@uiw/react-codemirror";
import { useContext } from "react";
import {
  DiagramBuilderContext,
  DiagramBuilderDispatchContext,
} from "../../../state/context";
import { useGraphBuilderQuery } from "../mutations";
import { debounce } from "@mui/material";

export function CodeEditor() {
  const state = useContext(DiagramBuilderContext);
  const dispatch = useContext(DiagramBuilderDispatchContext);

  const mutate = useGraphBuilderQuery({
    openaiApiKey: state.openaiApiKey,
    dispatch: dispatch,
  });

  const submit = (code: string) => {
    dispatch({ type: "set-diagram-code", diagramCode: code });
  };

  return (
    <CodeMirror
      value={state.diagramCode}
      minHeight="500px"
      maxHeight="84vh"
      maxWidth="31vw"
      onChange={debounce(submit, 1500)}
    />
  );
}
