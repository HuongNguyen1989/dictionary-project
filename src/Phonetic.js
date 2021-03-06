import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          preload="string"
        />
      </div>
    );
  } else return null;
}
