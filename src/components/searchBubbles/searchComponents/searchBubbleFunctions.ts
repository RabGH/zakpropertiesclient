import React from "react";

export const handleButtonClick = (
  event: React.MouseEvent<HTMLElement>,
  anchorEl: HTMLElement | null,
  setAnchorEl: (value: HTMLElement | null) => void,
  setOpen: (value: boolean) => void
) => {
  setAnchorEl(anchorEl ? null : event.currentTarget);
  setOpen((prev) => !prev);
};

export const handleSliderChange = (
  event: Event,
  newValue: number | number[],
  setLow: (value: number) => void,
  setHigh: (value: number) => void
): void => {
  if (Array.isArray(newValue)) {
    setLow(newValue[0]);
    setHigh(newValue[1]);
  }
};
