import { DiagramProvider } from "../models/diagram-provider";
import { DiagramType } from "../components/diagram-builder/models/diagram-types";

export interface AppState {
  diagramProvider: DiagramProvider;
  requirements: string[];
  diagramCode: string;
  loading: boolean;
  diagramType: DiagramType;

  openaiApiKey: string;
}
