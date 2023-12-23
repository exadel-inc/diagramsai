from enum import Enum


class PlantUmlDiagramType(str, Enum):
    SEQUENCE_DIAGRAM = "sequence-diagram"
    USE_CASE_DIAGRAM = "use-case-diagram"
    CLASS_DIAGRAM = "class-diagram"
    ACTIVITY_DIAGRAM = "activity-diagram"
    COMPONENT_DIAGRAM = "component-diagram"
    STATE_DIAGRAM = "state-diagram"
    OBJECT_DIAGRAM = "object-diagram"
    DEPLOYMENT_DIAGRAM = "deployment-diagram"
    TIMING_DIAGRAM = "timing-diagram"
    NETWORK_DIAGRAM = "network-diagram"
    GANTT_DIAGRAM = "gantt-diagram"
    MIND_MAP_DIAGRAM = "mind-map-diagram"
    JSON = "json-diagram"
    YAML = "yaml-diagram"
    WBS = "wbs-diagram"
    ARCHIMATE = "archimate-diagram"
