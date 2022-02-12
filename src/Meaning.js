import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4> {props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="mt-3">
              <strong>Definition:</strong> {definition.definition}
              <br />
              <em>
                <strong>Example:</strong> {definition.example}
              </em>
            </p>
            <Synonyms synonym={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
