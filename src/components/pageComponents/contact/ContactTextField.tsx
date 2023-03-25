import React from "react";
import TextField from "@mui/material/TextField";

interface ContactTextFieldProps {
  id: string;
  label: string;
  name: string;
  type: string;
  required: boolean;
  multiline: boolean;
  rows: number;
  variant: "filled" | "outlined" | "standard";
  size: "small" | "medium" | undefined;
  sx?: React.CSSProperties;
}

class ContactTextField extends React.Component<ContactTextFieldProps> {
  constructor(props: ContactTextFieldProps) {
    super(props);
  }

  render() {
    const {
      id,
      label,
      name,
      type,
      variant,
      required,
      multiline,
      rows,
      size,
      sx,
    } = this.props;

    return (
      <TextField
        id={id}
        label={label}
        name={name}
        type={type}
        variant={variant}
        required={required}
        multiline={multiline}
        rows={rows}
        size={size}
        sx={sx}
      >
        {this.props.label}
      </TextField>
    );
  }
}

export default ContactTextField;
