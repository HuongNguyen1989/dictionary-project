import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Audio(props) {
  return <ReactAudioPlayer src={props.src} controls />;
}
