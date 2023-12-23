import { useReducer } from "react";
import { stateReducer } from "./reducers";
import { DiagramBuilderContext, DiagramBuilderDispatchContext } from "./context";
import { initialState } from "./initial-state";

export function AppProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <DiagramBuilderContext.Provider value={state}>
      <DiagramBuilderDispatchContext.Provider value={dispatch}>
        {children}
      </DiagramBuilderDispatchContext.Provider>
    </DiagramBuilderContext.Provider>
  );
}
