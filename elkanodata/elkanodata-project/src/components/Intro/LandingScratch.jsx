import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/landingScratch.module.scss";
import scratch_foto from "../../images/scratch.jpg";

const LandingScratch = () => {
  return (
    <div className={style.image_container}>
      <img src={scratch_foto} alt="children profile face" />
      <div className={style.text}>
        <h3>That’s 830 women every day.</h3>
      </div>
      <Link className={style.link} to="/liberia">
        <h4>Next</h4>
      </Link>
    </div>
    // <div className={style.image_container}>
    //   <div className={style.nomal}></div>
    //   <div className={style.invert}></div>
    //   <div className={style.text}>
    //     <h3>That’s 830 women every day.</h3>
    //   </div>
    //   <Link className={style.link} to="/liberia">
    //     <h4>Next</h4>
    //   </Link>
    // </div>
  );
};

export default LandingScratch;
