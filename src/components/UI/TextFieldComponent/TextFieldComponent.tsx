import { TextField } from "@material-ui/core";
import React, { ChangeEvent, FC } from "react";

type TextFieldComponentProps = {
  label: string;
  type: string;
  helperText: string;
  error: string;
  onTextFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextFieldComponent: FC<TextFieldComponentProps> = ({
  label,
  type,
  helperText,
  error,
  onTextFieldChange,
}: TextFieldComponentProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      required
      label={label}
      type={type}
      onChange={onTextFieldChange}
      helperText={helperText}
      error={Boolean(error)}
    />
  );
};

export default TextFieldComponent;
