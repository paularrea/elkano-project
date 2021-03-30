import React, { Fragment } from "react";
import Media from "react-media";
import foto4 from "../../images/foto4.jpg";
import { Parallax } from "react-parallax";
import style from "../../styles/storyLiberia.module.scss";

const ParallaxWomanBaby = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 869px)",
        large: "(min-width: 870px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
            <div className={style.img_woman_baby_container}>
              <Parallax bgImage={foto4} strength={250}>
                <div style={{ height: "30vh", width: "90vw" }}></div>
              </Parallax>
            </div>
          )}
          {matches.large && (
            <div className={style.img_woman_baby_container}>
              <Parallax bgImage={foto4} strength={170}>
                <div style={{ height: "40vw", width: "70vw" }}></div>
              </Parallax>
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default ParallaxWomanBaby;
