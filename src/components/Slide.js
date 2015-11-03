import React from 'react';
import Remarkable from 'react-remarkable';
import dataV1 from '../appdata';

const Slide = ({index}) => {
  const slides = dataV1;
  console.log(dataV1);
  return (
    <div className="container">
      <Remarkable>
        # Frontend Development with FLUX Pattern and ReactJS
      </Remarkable>
    </div>
  );
};

export default Slide;
