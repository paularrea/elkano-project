import React from "react";
import foto_face from "../images/foto2.jpg";
import { Parallax } from "react-parallax";

const ParallaxYamahFace = () => {
  return (
    <Parallax bgImage={foto_face} strength={-100}>
      <div style={{ height: '40vw', width:'60vw' }}></div>
    </Parallax>
  );
};

export default ParallaxYamahFace;
