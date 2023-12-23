import { ButtonGroup, Button } from "@mui/material";
import humanizeString from "humanize-string";
import { DiagramType, diagramTypesMap } from "./models/diagram-types";
import { useContext } from "react";
import {
  DiagramBuilderContext,
  DiagramBuilderDispatchContext,
} from "../../state/context";
import { useGraphBuilderQuery } from "./mutations";

export function DiagramTypeSelector() {
  const state = useContext(DiagramBuilderContext);
  const dispatch = useContext(DiagramBuilderDispatchContext);

  const diagramTypes = diagramTypesMap[state.diagramProvider];

  const mutate = useGraphBuilderQuery({
    openaiApiKey: state.openaiApiKey,
    dispatch: dispatch,
  });

  const onDiagramTypeChanged = (diagramType: DiagramType) => {
    dispatch({ type: "set-diagram-type", diagramType: diagramType });

    mutate.mutate({
      diagramProvider: state.diagramProvider,
      requirements: state.requirements,
      diagramType: diagramType,
      diagramCode: "",
    });
  };

  const buttons = diagramTypes.map((item: DiagramType) => {
    return (
      <Button
        key={item}
        className={state.diagramType === item ? "selected" : ""}
        onClick={() =>
          state.diagramType !== item ? onDiagramTypeChanged(item) : null
        }
      >
        {humanizeString(item).replace("diagram", " ").trim()}
      </Button>
    );
  });

  return (
    <div className="diagram-types">
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
}
