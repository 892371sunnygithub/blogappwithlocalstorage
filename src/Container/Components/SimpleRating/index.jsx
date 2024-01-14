import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./index.css";
const SimpleRating = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const onPointerEnter = () => {};
  const onPointerLeave = () => {};
  const onPointerMove = (value, index) => {};

  return (
    <div className="simplestarrating">
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        showTooltip={true}
      />
    </div>
  );
};

export default SimpleRating;
