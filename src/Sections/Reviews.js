import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "./Reviews.css";

const Reviews = () => {
  const [cardIndices, setCardIndices] = useState([]);

  useEffect(() => {
    let cardOneIdx = Math.floor(Math.random() * 10);
    let cardTwoIdx = Math.floor(Math.random() * 10);
    let cardThreeIdx = Math.floor(Math.random() * 10);

    while (cardOneIdx === cardTwoIdx || cardTwoIdx === cardThreeIdx || cardOneIdx === cardThreeIdx) {
      cardOneIdx = Math.floor(Math.random() * 10);
      cardTwoIdx = Math.floor(Math.random() * 10);
      cardThreeIdx = Math.floor(Math.random() * 10);
    }

    setCardIndices([cardOneIdx, cardTwoIdx, cardThreeIdx]);
  }, []);

  return (
    <div id="reviews-container">
      {cardIndices.map(index => <Card key={index} index={index} />)}
    </div>
  );
};

export default Reviews;