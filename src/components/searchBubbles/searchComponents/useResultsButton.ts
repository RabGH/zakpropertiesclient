import { useContext } from "react";
import { ResultsButtonContext } from "../SearchFieldBubbles";

export const useResultsButton = () => {
  const resultsButton = useContext(ResultsButtonContext);
  return resultsButton;
};