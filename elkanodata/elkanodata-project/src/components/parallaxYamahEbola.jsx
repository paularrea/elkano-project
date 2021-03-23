import React from "react";
import foto3 from "../images/foto3.jpg";
import { Parallax } from "react-parallax";
import style from "../styles/intro.module.scss";

const ParallaxYamahFace = () => {
  return (
    <Parallax bgImage={foto3} strength={150}>
      <div className={style.img_ebola_container} style={{ height: '40vw' }}>
        <div>
          <h4>
            Yamah risked her own life to deliver babies during the Ebola
            outbreak.
          </h4>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxYamahFace;
