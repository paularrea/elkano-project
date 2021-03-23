import React, { useState } from "react";
import style from "../styles/changeBgImg.module.scss";
import foto5 from "../images/foto5.jpg";
import foto3 from "../images/foto3.jpg";
import { Parallax } from "react-parallax";

const ChangeBgImg = () => {
  const [equipped, setEquipped] = useState(false);
  const [unequipped, setUnequipped] = useState(true);

  const clickEquipped = () => {
    setEquipped(true);
    setUnequipped(false);
  };
  const clickUnequipped = () => {
    setEquipped(false);
    setUnequipped(true);
  };

  return (
    <Parallax bgImage={equipped ? foto3 : foto5} strength={150}>
      <div className={style.container} style={{ height: "40vw" }}>
        <div className={style.center}>
          <p>
            With support from Johnson Johnson, UNFPA is working to equip
            midwives with the skills they need to ensure safe birth.
          </p>
          <div className={style.buttons_container}>
            <button
              onClick={clickEquipped}
              className={
                equipped ? style.circle_btn : style.circle_btn_disabled
              }
            >
              equipped
            </button>
            <button
              onClick={clickUnequipped}
              className={
                unequipped ? style.circle_btn : style.circle_btn_disabled
              }
            >
              unequipped
              <br />
              clinic
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ChangeBgImg;
