import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState("");
  const [photos, setPhotos] = useState("");

  function handleDictionaryResponse(response) {
    setData(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f917000010000015bd1ebb7d756495b9fb1e17c18a87087";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary mt-5 ms-5 me-5">
      <div className="heading-text">
        <h2>Dictionary 📚</h2>
        <p>Definitions from Free Dictionary API </p>
      </div>
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placehoder="Search for a word"
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Result result={data} />
      <Photos photos={photos} />
    </div>
  );
}
