import React from "react";
import intro_foto from "../../images/intro.jpg";
import style from "../../styles/intro.module.scss";
import jnj_icon from "../../images/icons/jnj_icon.png";
import ProgressCircle from "./ProgressCircle";

const Intro = () => {
  return (
    <>
    <div className={style.container}>
      <div className={style.fixed_container}>
        <div className={style.image_container}>
          <img src={intro_foto} alt="children profile face" />
          <div>
            <h4>Every 2 minutes, a woman dies giving birth</h4>
              <ProgressCircle />
          </div>
          <footer>
            safe birth even here ® 2018 . Privacy Policy and Terms of Use .
            Sponsored by
            <img src={jnj_icon} alt="johnson and johnson icon" />
          </footer>
        </div>
      </div>
    </div>
    </>
  );
};

export default Intro;
