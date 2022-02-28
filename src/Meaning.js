import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  function capitalizeFistLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="Meaning">
      <h4> {capitalizeFistLetter(props.meaning.partOfSpeech)}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              🔆 {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
            <Synonyms synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
