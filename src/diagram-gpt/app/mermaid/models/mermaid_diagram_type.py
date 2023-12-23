from enum import Enum


class MermaidDiagramType(str, Enum):
    FLOWCHART_DIAGRAM = "flowchart-diagram"
    SEQUENCE_DIAGRAM = "sequence-diagram"
    CLASS_DIAGRAM = "class-diagram"
    STATE_DIAGRAM = "state-diagram"
    ENTITY_RELATIONSHIP_DIAGRAM = "entity-relationship-diagram"
    GANTT_DIAGRAM = "gantt-diagram"
    PIE_CHART = "pie-chart"
    QUADRANT_CHART = "quadrant-chart"
    REQIREMENT_DIAGRAM = "reqirement-diagram"
    TIMELINE_DIAGRAM = "timeline-diagram"
    GIT_DIAGRAM = "git-diagram"
    MIND_MAP_DIAGRAM = "mind-map-diagram"
