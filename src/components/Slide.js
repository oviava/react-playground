import React from 'react';
import dataV1 from '../appdata';

const Slide = ({index}) => {
  const slides = dataV1;
  return (
    <div className="slidebox">
      {slides[index]}
    </div>
  );
};

export default Slide;
