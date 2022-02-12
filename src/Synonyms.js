import React from "react";

export default function Synonyms(props) {
  if (props.synonym.length > 0) {
    return (
      <ul className="Synonyms">
        {props.synonym.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else return null;
}
