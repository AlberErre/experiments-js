import React from "react";

const Pianokey = props => {
  const { sound } = props;
  return <div className={sound.class} onClick={() => sound.audio.play()} />;
};

export default Pianokey;
