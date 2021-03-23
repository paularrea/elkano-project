import React from "react";
import foto4 from "../images/foto4.jpg";
import { Parallax } from "react-parallax";
import style from "../styles/intro.module.scss";

const ParallaxWomanBaby = () => {
  return (
    <div className={style.img_woman_baby_container}>
      <Parallax bgImage={foto4} strength={170}>
        <div style={{ height: "40vw", width: "70vw" }}></div>
      </Parallax>
    </div>
  );
};

export default ParallaxWomanBaby;
