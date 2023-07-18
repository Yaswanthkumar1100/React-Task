import React from "react";
import { useParams } from "react-router-dom";

export const Punchline = ({ jokes }) => {
  const { id } = useParams();
  const joke = jokes.find((joke) => joke.id === parseInt(id));

  return (
    <div className="punchline-container">
      <h2>Punchline</h2>
      {joke ? (
        <p className="punchline">{joke.punchline}</p>
      ) : (
        <p> </p>
      )}
    </div>
  );
};
