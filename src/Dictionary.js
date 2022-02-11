import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState("");

  function handleResponse(response) {
    setData(response.data[0]);
  }

  function change(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary mt-5 ms-5 me-5">
      <form onSubmit={change}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Result result={data} />
    </div>
  );
}
