import { Dispatch, createContext } from "react";
import { AppState } from "./app-state";
import { initialState } from "./initial-state";
import { ActionType } from "./actions";

export const DiagramBuilderContext =
  createContext<AppState>(initialState);
export const DiagramBuilderDispatchContext = createContext<
  Dispatch<ActionType>
>((s) => s);
