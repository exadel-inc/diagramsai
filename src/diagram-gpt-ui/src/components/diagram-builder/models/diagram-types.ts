import { DiagramProvider } from "../../../models/diagram-provider";

export enum MermaidDiagramTypes {
  FLOWCHART_DIAGRAM = "flowchart-diagram",
  SEQUENCE_DIAGRAM = "sequence-diagram",
  CLASS_DIAGRAM = "class-diagram",
  STATE_DIAGRAM = "state-diagram",
  ENTITY_RELATIONSHIP_DIAGRAM = "entity-relationship-diagram",
  GANTT_DIAGRAM = "gantt-diagram",
  PIE_CHART = "pie-chart",
  QUADRANT_CHART = "quadrant-chart",
  REQIREMENT_DIAGRAM = "reqirement-diagram",
  TIMELINE_DIAGRAM = "timeline-diagram",
  GIT_DIAGRAM = "git-diagram",
  MIND_MAP_DIAGRAM = "mind-map-diagram",
}

export enum PlantUmlDiagramTypes {
  SEQUENCE_DIAGRAM = "sequence-diagram",
  USE_CASE_DIAGRAM = "use-case-diagram",
  CLASS_DIAGRAM = "class-diagram",
  ACTIVITY_DIAGRAM = "activity-diagram",
  COMPONENT_DIAGRAM = "component-diagram",
  STATE_DIAGRAM = "state-diagram",
  OBJECT_DIAGRAM = "object-diagram",
  DEPLOYMENT_DIAGRAM = "deployment-diagram",
  TIMING_DIAGRAM = "timing-diagram",
  //NETWORK_DIAGRAM = "network-diagram",
  GANTT_DIAGRAM = "gantt-diagram",
  MIND_MAP_DIAGRAM = "mind-map-diagram",
  JSON = "json-diagram",
  YAML = "yaml-diagram",
  WBS = "wbs-diagram",
  ARCHIMATE = "archimate-diagram",
}

export const diagramTypesMap = {
  [DiagramProvider.Mermaid]: Object.values(MermaidDiagramTypes),
  [DiagramProvider.PlantUML]: Object.values(PlantUmlDiagramTypes),
};

export type DiagramType = MermaidDiagramTypes | PlantUmlDiagramTypes;
