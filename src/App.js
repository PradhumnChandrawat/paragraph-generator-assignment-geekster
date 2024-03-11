import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [numParagraphs, setNumParagraphs] = useState(0);

  const handleGenerate = () => {
    setParagraphs(data.para.slice(0, numParagraphs));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className="generator">
          <label htmlFor="numParagraphs">Paragraphs:</label>
          <input
            id="numParagraphs"
            type="number"
            value={numParagraphs}
            onChange={(e) => setNumParagraphs(parseInt(e.target.value, 10))}
          />
          <button onClick={handleGenerate}>GENERATE</button>
        </div>
      </div>
      <div className="content">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
