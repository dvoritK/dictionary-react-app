import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function newKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="searchEngine">
        <h5>What word do you want to look up?</h5>
        <form onSubmit={handleSubmit}>
          <input type="search" className="search" onChange={newKeyword} />
          <input type="submit" className="submit" value="🔍" />
        </form>
      </div>
      <br />
      <Results results={result} />
    </div>
  );
}
