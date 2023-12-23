import { Tab, Tabs } from "@mui/material";
import { useContext, useState } from "react";
import { RequirementsControls } from "./requirements-controls";
import { CustomTabPanel } from "../../shared/custom-tab-panel";
import { CodeEditor } from "./code-editor";
import {
  DiagramBuilderContext,
  DiagramBuilderDispatchContext,
} from "../../../state/context";
import { Requirements } from "./requirements";
import { Samples } from "./samples";
import { useGraphBuilderQuery } from "../mutations";
import { DiagramType } from "../models/diagram-types";
import { AddRequirement } from "./add-requirement";

export function DiagramEditor() {
  const [tab, setTab] = useState(0);

  const state = useContext(DiagramBuilderContext);
  const dispatch = useContext(DiagramBuilderDispatchContext);

  const mutate = useGraphBuilderQuery({
    openaiApiKey: state.openaiApiKey,
    dispatch: dispatch,
  });

  const regenerate = () => {
    dispatch({ type: "regenerate-diagram" });

    mutate.mutate({
      diagramProvider: state.diagramProvider,
      requirements: state.requirements,
      diagramType: state.diagramType,
      diagramCode: "",
    });
  };

  const selectSample = (diagramType: DiagramType, requirement: string) => {
    dispatch({
      type: "select-sample",
      diagramType: diagramType,
      requirement: requirement,
    });

    mutate.mutate({
      diagramProvider: state.diagramProvider,
      requirements: [requirement],
      diagramType: diagramType,
      diagramCode: "",
    });
  };

  const addRequirement = (requirement: string) => {
    dispatch({ type: "add-requirement", requirement: requirement });

    mutate.mutate({
      diagramProvider: state.diagramProvider,
      requirements: [requirement],
      diagramType: state.diagramType,
      diagramCode: state.diagramCode,
    });
  };

  return (
    <div className="diagram-editor with-border">
      <div className="controls-panel">
        <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
          <Tab label="Requirements" />
          <Tab label="Diagram Code" />
        </Tabs>
        <RequirementsControls onRegenerateDiagram={regenerate} />
      </div>

      <CustomTabPanel value={tab} index={0}>
        <>
          <Requirements requirements={state.requirements} />

          {state.requirements.length == 0 && (
            <Samples
              onSampleSelected={selectSample}
              diagramProvider={state.diagramProvider}
            />
          )}

          <AddRequirement
            onNewRequirement={addRequirement}
            disabled={state.loading}
          />
        </>
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        <CodeEditor />
      </CustomTabPanel>
    </div>
  );
}
