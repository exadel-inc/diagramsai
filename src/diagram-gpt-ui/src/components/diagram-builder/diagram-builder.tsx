import { useContext } from "react";
import "./diagram-builder.scss";
import { DiagramViewer } from "./diagram-viewer/diagram-viewer";
import { Loadable } from "../shared/loadable/loadable";
import { DiagramTypeSelector } from "./diagram-type-selector";
import { DiagramBuilderContext } from "../../state/context";
import { DiagramEditor } from "./diagram-editor/diagram-editor";

export function DiagramBuilder() {
  const state = useContext(DiagramBuilderContext);

  return (
    <div className="diagram-builder">
      <DiagramEditor />
      <div className="diagram-controls">
        <DiagramTypeSelector />
      </div>
      <div className="diagram-viewer with-border">
        <Loadable loading={state.loading} text="Generating...">
          <DiagramViewer
            diagramCode={state.diagramCode}
            diagramProvider={state.diagramProvider}
          />
        </Loadable>
      </div>
    </div>
  );
}
