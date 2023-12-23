import {
  MermaidDiagramTypes,
  PlantUmlDiagramTypes,
} from "../components/diagram-builder/models/diagram-types";
import { ActionType } from "./actions";
import { AppState } from "./app-state";

export function stateReducer(state: AppState, action: ActionType): AppState {
  switch (action.type) {
    case "add-requirement":
      return {
        ...state,
        requirements: [...state.requirements, action.requirement],
      };
    case "clear-all-requirements":
      return {
        ...state,
        requirements: [],
        diagramCode: "",
      };
    case "set-loading":
      return {
        ...state,
        loading: action.loading,
      };
    case "set-diagram-code":
      return {
        ...state,
        diagramCode: action.diagramCode || "",
      };
    case "set-diagram-type":
      return {
        ...state,
        diagramType: action.diagramType,
        diagramCode: "",
      };

    case "regenerate-diagram":
      return {
        ...state,
        diagramCode: "",
      };

    case "select-sample":
      return {
        ...state,
        requirements: [action.requirement],
        diagramType: action.diagramType,
      };

    case "set-diagram-provider":
      return {
        ...state,
        diagramProvider: action.diagramProvider,
        requirements: [],
        diagramCode: "",
        diagramType:
          action.diagramProvider === "mermaid"
            ? MermaidDiagramTypes.FLOWCHART_DIAGRAM
            : PlantUmlDiagramTypes.SEQUENCE_DIAGRAM,
      };

    case "set-open-ai-key":
      return {
        ...state,
        openaiApiKey: action.openaiApiKey,
      };
  }

  return state;
}
