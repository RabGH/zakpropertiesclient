import React from "react";
import { ClickAwayListener } from "@mui/material";
import { ClickAwayBubbleProps } from "./bubbleInterfaces";

const ClickAwayBubble: React.FC<ClickAwayBubbleProps> = ({
  open,
  setOpen,
  children,
}) => {
  const handleClickAway = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      {children}
    </ClickAwayListener>
  );
};

export default ClickAwayBubble;
