import { DiagramProvider } from "../models/diagram-provider";
import { MermaidDiagramTypes } from "../components/diagram-builder/models/diagram-types";
import { AppState } from "./app-state";

export const initialState = <AppState>{
  diagramProvider: DiagramProvider.Mermaid,
  requirements: [],
  diagramCode: "",
  loading: false,
  diagramType: MermaidDiagramTypes.FLOWCHART_DIAGRAM,
  openaiApiKey: "",
};
