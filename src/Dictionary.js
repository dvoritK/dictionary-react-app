import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    return alert(`${keyword}`);
  }
  function newKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={newKeyword} />
        <input type="submit" value="🔍" />
      </form>
    </div>
  );
}
