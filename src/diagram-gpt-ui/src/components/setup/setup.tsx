import { Button, TextField } from "@mui/material";
import "./setup.scss";
import { useContext, useState } from "react";
import {
  DiagramBuilderDispatchContext,
} from "../../state/context";

export function Setup() {
  const dispatch = useContext(DiagramBuilderDispatchContext);

  const [openAiKey, setOpenAiKey] = useState("");

  const saveOpenAiKey = () => {
    dispatch({ type: "set-open-ai-key", openaiApiKey: openAiKey });
  };

  return (
    <div className="setup">
      <div className="form">
        <label className="instructions">
          Please provide your OpenAI Key in order to proceed
        </label>
        <TextField
          onChange={(v) => setOpenAiKey(v.target.value)}
          fullWidth
          label="OpenAI Key"
          InputProps={{
            endAdornment: (
              <Button
                variant="contained"
                disabled={!openAiKey}
                onClick={saveOpenAiKey}
              >
                Save
              </Button>
            ),
          }}
        />
      </div>
    </div>
  );
}
