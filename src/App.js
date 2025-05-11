import React from "react";
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const { data, loading, error, getJoke } = useFetch(url);

  // When loading, render only the loading text
  if (loading) {
    return (
      <div className="App">
        <p data-testid="loading">Loading...</p>
      </div>
    );
  }

  // When there's an error, render only the error message
  if (error) {
    return (
      <div className="App">
        <p data-testid="error">{error}</p>
      </div>
    );
  }

  // When data is loaded, render the complete UI including header, joke, and button
  return (
    <div className="App">
      <h1 data-testid="header">Joke Generator</h1>
      <h2 data-testid="joke">{data.joke}</h2>
      <button className="btn" data-testid="new-joke" onClick={getJoke}>
        New Joke
      </button>
    </div>
  );
}
