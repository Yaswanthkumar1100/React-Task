import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card } from "./Card";
import { Punchline } from "./Punchline";

const jokeurl = 'https://official-joke-api.appspot.com/random_joke';

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJokes = async () => {
    setIsLoading(true);
    const fetchedJokes = [];
    for (let i = 0; i < 6; i++) {
      try {
        const response = await fetch(jokeurl);
        const jokessss = await response.json();
        fetchedJokes.push(jokessss);
      } catch (err) {
        console.log(err.stack);
      }
    }
    setJokes(fetchedJokes);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="App">
      <div className="card-container">
        <Routes>
          <Route path="/" element={
            <>
              {jokes.length > 0 ? (
                jokes.map((joke, index) => (
                  <Card key={index} joke={joke} />
                ))
              ) : (
                <p>No jokes available.</p>
              )}
            </>
          } />
          <Route path="/joke/:id" element={<Punchline jokes={jokes} />} />
        </Routes>
      </div>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default App;
