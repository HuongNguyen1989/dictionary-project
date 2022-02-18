import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        phonetic audio
      </a>
      <h5>{props.phonetic.text}</h5>
    </div>
  );
}
