import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";

type AddRequirementProps = {
  disabled: boolean;
  onNewRequirement: (requirement: string) => void;
};

export function AddRequirement({
  disabled,
  onNewRequirement,
}: AddRequirementProps) {
  const [newRequerement, setNewRequirement] = useState("");

  return (
    <TextField
      id="outlined-multiline-static"
      label="Requirements"
      multiline
      value={newRequerement}
      onChange={(v) => setNewRequirement(v.target.value)}
      rows={3}
      InputProps={{
        endAdornment: (
          <IconButton
            disabled={disabled || !newRequerement}
            onClick={() => {
              onNewRequirement(newRequerement);
              setNewRequirement("");
            }}
          >
            <SendIcon />
          </IconButton>
        ),
      }}
    />
  );
}
