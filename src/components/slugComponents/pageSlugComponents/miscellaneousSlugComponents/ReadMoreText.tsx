import { useState } from "react";

interface ReadMoreTextProps {
  text: string; // the text to display
  length: number; // the maximum number of characters to show initially
}

const ReadMoreText = ({ text, length }: ReadMoreTextProps) => {
  const [showMore, setShowMore] = useState(false); // a state to toggle the full text

  const handleShowMore = () => {
    setShowMore(!showMore); // toggle the state
  };

  return (
    <div>
      <p>
        {showMore ? text : `${text.slice(0, length)}...`} // show either the full text or the truncated text based on the state
      </p>
      <button onClick={handleShowMore}>
        {showMore ? "Read less" : "Read more"} // change the button text based on the state
      </button>
    </div>
  );
};

export default ReadMoreText;