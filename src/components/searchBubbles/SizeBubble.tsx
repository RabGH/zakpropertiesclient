import { useState } from "react";

const squareFootages = [
  "Less than 1000",
  "1000 - 2000",
  "2000 - 3000",
  "3000 - 4000",
  "More than 4000",
];

const [selectedSquareFootage, setSelectedSquareFootage] = useState<string[]>(
  []
);

const handleSquareFootageChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const squareFootage = event.target.value;
  const isChecked = event.target.checked;
  setSelectedSquareFootage((prevSelectedSquareFootage) => {
    if (isChecked) {
      return [...prevSelectedSquareFootage, squareFootage];
    } else {
      return prevSelectedSquareFootage.filter((sf) => sf !== squareFootage);
    }
  });
};
