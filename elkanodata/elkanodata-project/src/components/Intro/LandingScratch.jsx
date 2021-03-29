import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/landingScratch.module.scss";
import scratch_foto from "../../images/scratch.jpg";

const LandingScratch = () => {
  return (
    <div className={style.image_container}>
      {/* <img src={scratch_foto} alt="children profile face" /> */}
      <div className={style.text}>
        <h3>That’s 830 women every day.</h3>
      </div>
      <Link className={style.link} to="/liberia">
        <h4>Next</h4>
      </Link>
      <svg id='svg'>
        <clippath id="clip">
          <circle cx="50" cy="50" r="50" className="a" />
        </clippath>
        <image
          href={scratch_foto}
          width="100%"
          height="100%"
          className={style.opacity}
          preserveAspectRatio="none"
        />
        <image
          href={scratch_foto}
          width="100%"
          height="100%"
          clip-path="url(#clip)"
          preserveAspectRatio="none"
        />
      </svg>
    </div>
  );
};

export default LandingScratch;
