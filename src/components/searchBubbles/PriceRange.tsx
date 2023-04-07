import { useState } from "react";

const priceRanges = [
  "Less than 500K",
  "500K - 1M",
  "1M - 2M",
  "2M - 3M",
  "More than 3M",
];
const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);

const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const priceRange = event.target.value;
  const isChecked = event.target.checked;
  setSelectedPriceRange((prevSelectedPriceRange) => {
    if (isChecked) {
      return [...prevSelectedPriceRange, priceRange];
    } else {
      return prevSelectedPriceRange.filter((pr) => pr !== priceRange);
    }
  });
};
