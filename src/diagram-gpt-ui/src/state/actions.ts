import { DiagramProvider } from "../models/diagram-provider";
import { DiagramType } from "../components/diagram-builder/models/diagram-types";

export type AddRequirementAction = {
  type: "add-requirement";
  requirement: string;
};

export type ClearAllRequirementsAction = {
  type: "clear-all-requirements";
};

export type SetLoading = {
  type: "set-loading";
  loading: boolean;
};

export type SetDiagramCodeActionAction = {
  type: "set-diagram-code";
  diagramCode: string;
};

export type SetDiagramTypeAction = {
  type: "set-diagram-type";
  diagramType: DiagramType;
};

export type RegenerateDiagramAction = {
  type: "regenerate-diagram";
};

export type SelectSampleAction = {
  type: "select-sample";
  requirement: string;
  diagramType: DiagramType;
};

export type SetDiagramProviderAction = {
  type: "set-diagram-provider";
  diagramProvider: DiagramProvider;
};

export type SetOpenAiKeyAction = {
  type: "set-open-ai-key";
  openaiApiKey: string;
};

export type ActionType =
  | AddRequirementAction
  | ClearAllRequirementsAction
  | SetLoading
  | SetDiagramCodeActionAction
  | SetDiagramTypeAction
  | RegenerateDiagramAction
  | SelectSampleAction
  | SetDiagramProviderAction
  | SetOpenAiKeyAction;
