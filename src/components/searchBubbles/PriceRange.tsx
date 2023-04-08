import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";

interface Props {
  handlePriceRange: (low: number, high: number) => void;
  priceRange: number;
}

const PriceRange: React.FC<Props> = ({ handlePriceRange, priceRange }) => {
  const [low, setLow] = useState<number>(priceRange[0]);
  const [high, setHigh] = useState<number>(priceRange[1]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePriceRange(low, high);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="low">Low</InputLabel>
        <Input
          id="low"
          type="number"
          value={low}
          onChange={(e) => setLow(Number(e.target.value))}
        />
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="high">High</InputLabel>
        <Input
          id="high"
          type="number"
          value={high}
          onChange={(e) => setHigh(Number(e.target.value))}
        />
      </FormControl>
      <Button variant="outlined" type="submit">
        Price Range
      </Button>
    </form>
  );
};

export default PriceRange;
