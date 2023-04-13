import React, { useState } from "react";
import "../CSSFiles/NumbersApi.css";
import NumbersLogo from "../NumbersLogo.png";

function NumbersApi() {
  const [number, setNumber] = useState("");
  const [type, setType] = useState("trivia");
  const [fact, setFact] = useState("");

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://numbersapi.com/${number}/${type}`;
    const response = await fetch(url);
    const data = await response.text();
    setFact(data);
  };

  return (
    <div className="NumbersApi">
      <div className="NumbersApi-header">
        <img src={NumbersLogo} alt="Logo" />
        <h1>Numbers 123</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={handleNumberChange}
        />

        <label htmlFor="type">Type:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="trivia">Trivia</option>
          <option value="math">Math</option>
          <option value="date">Date</option>
          <option value="year">Year</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {fact && (
        <div className="NumbersApi-fact">
          <p>{fact}</p>
        </div>
      )}
    </div>
  );
}

export default NumbersApi;
