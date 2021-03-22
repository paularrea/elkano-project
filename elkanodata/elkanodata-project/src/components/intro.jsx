import React from "react";
import style from "../styles/intro.module.scss";

import icon_liberia from "../images/icons/a_icon_liberia.png";
import arrow from "../images/icons/arrow.png";
import foto_face from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpg";
import line from "../images/icons/line.png";
import VideoComponent from "./VideoComponent";

const Intro = () => {
  return (
    <>
      <div className={style.intro_container}>
        <div className={style.title_container}>
          <img src={icon_liberia} alt="liberia silouette map" />
          <h2>
            Liberi
            <br />a
          </h2>
        </div>
        <div className={style.arrow_container}>
          <img src={arrow} alt="scroll arrow" />
        </div>
      </div>

      <div className={style.flex_container}>
        <div className={style.text_container}>
          <h3>I can work to save my people.</h3>
          <p>Yamah, a midwife and supervisor of a maternal health clinic.</p>
        </div>
        <div className={style.img_container}>
          <img className={style.yamah_img} src={foto_face} alt="Yamah face" />
        </div>
        <div className={style.line}>
          <img src={line} alt="line" />
        </div>
      </div>

      <div className={style.img_ebola_container}>
        <div>
          <h4>Yamah risked her own life to deliver babies during the Ebola</h4>
        </div>
        <img src={foto3} alt="Yamah ebola" />
      </div>
      <div className={style.ebola_text_container}>
        <p>
          The epidemic devastated Liberia’s fragile healthcare system. Maternal
          deaths surged. But <span style={{ color: "#D99E94" }}>even here</span>
          , midwives like Yamah persevered in tending to mothers and their
          newborns.{" "}
        </p>
      </div>

      <div className={style.img_woman_baby_container}>
        <img src={foto4} alt="woman with baby" />
      </div>

      <VideoComponent />
    </>
  );
};

export default Intro;
