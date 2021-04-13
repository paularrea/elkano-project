import React, {useEffect} from "react";
import intro_foto from "../../images/intro.jpg";
import style from "../../styles/intro.module.scss";
import jnj_icon from "../../images/icons/jnj_icon.png";
import ProgressCircle from "./ProgressCircle";
import unfpa_icon from "../../images/icons/unfpa_icon.png"

const Intro = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.fixed_container}>
          <div style={{ zIndex: "-1" }} className={style.image_container}>
            <img src={intro_foto} alt="children profile face" />
            <span className={style.icon_unfpa}><img src={unfpa_icon} alt="unfpa"/></span>
            <div className={style.text_intro}>
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
