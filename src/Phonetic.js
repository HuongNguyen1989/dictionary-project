import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h5>{props.phonetic.text}</h5>
      <Audio src={props.phonetic.audio} />
    </div>
  );
}
