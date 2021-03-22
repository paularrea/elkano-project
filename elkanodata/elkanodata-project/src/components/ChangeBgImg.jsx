import React, { useState } from "react";
import style from "../styles/changeBgImg.module.scss";
import foto5 from "../images/foto5.jpg";
import foto3 from "../images/foto3.jpg";

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
    <>
      <div className={style.container}>
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
              <p>equipped</p>
            </button>
            <button
              onClick={clickUnequipped}
              className={
                unequipped ? style.circle_btn : style.circle_btn_disabled
              }
            >
              <p>unequipped clinic</p>
            </button>
          </div>
        </div>
        {equipped && <img src={foto3} alt="Yamah ebola" />}
        {unequipped && <img src={foto5} alt="Yamah ebola" />}
      </div>
    </>
  );
};

export default ChangeBgImg;
