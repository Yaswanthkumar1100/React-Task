import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ joke }) => {
  const imageUrl = `https://picsum.photos/200/300?random=${Math.random()}`;

  return (
    <div className="just-card">
      <Link to = {`/joke/${joke.id}`}><img src={imageUrl} alt="Card-image" ></img></Link>
      <Link to={`/joke/${joke.id}`}><h2 className="setup">{joke.setup}</h2></Link>
      <Link to={`/joke/${joke.id}`}><p className="punch">{joke.punchline}</p></Link>
      <Link to={`/joke/${joke.id}`}>View Punchline</Link>
    </div>
  );
};

