import React, { useState } from "react";
//import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCard } from "./sliceCard";
export default function Card({ id }) {
  const cards =useSelector(selectCard); // replace this with a call to your selector to get all the cards in state
  const card = cards[id];
  const [flipped, setFlipped] = useState(true);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.card.back  : card.card.front}
      </button>
    </li>
  );
}
