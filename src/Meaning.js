import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4> {props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="mt-3">
              {index + 1} - {definition.definition}
              <br />
              <em>Example: {definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
