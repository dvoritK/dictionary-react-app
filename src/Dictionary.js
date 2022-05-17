import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001c16e50325749446d82dbbf5095fd6eb6";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
