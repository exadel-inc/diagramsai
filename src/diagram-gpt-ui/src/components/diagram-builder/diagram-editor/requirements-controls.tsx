import { Tooltip } from "@mui/material";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CachedIcon from "@mui/icons-material/Cached";
import { useContext } from "react";
import {
  DiagramBuilderContext,
  DiagramBuilderDispatchContext,
} from "../../../state/context";

type RequirementsControlsProps = {
  onRegenerateDiagram: () => void;
};

export function RequirementsControls({
  onRegenerateDiagram,
}: RequirementsControlsProps) {
  const state = useContext(DiagramBuilderContext);
  const dispatch = useContext(DiagramBuilderDispatchContext);

  const clearAll = () => {
    dispatch({ type: "clear-all-requirements" });
  };

  return (
    <div className="controls">
      {state.requirements.length > 0 ? (
        <>
          <Tooltip title="Clear all requirements">
            <CleaningServicesIcon onClick={clearAll} />
          </Tooltip>
          <Tooltip title="Regenerate diagram">
            <CachedIcon onClick={onRegenerateDiagram} />
          </Tooltip>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
