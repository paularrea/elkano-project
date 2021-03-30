import React, { useRef, useEffect, Fragment } from "react";
import style from "../../styles/storyLiberia.module.scss";
import { Parallax } from "react-scroll-parallax";
import Media from "react-media";

import icon_liberia from "../../images/icons/a_icon_liberia.png";
import arrow from "../../images/icons/arrow.png";
import line from "../../images/icons/line.png";
import VideoComponent from "./VideoComponent";
import ChangeBgImg from "./ChangeBgImg";
import SafeBirthComponent from "./SafeBirthComponent";
import ParallaxYamahFace from "./parallaxYamahFace";
import ParallaxYamahEbola from "./parallaxYamahEbola";
import ParallaxWomanBaby from "./parallaxWomanBaby";
import Fade from "react-reveal";

const StoryLiberia = () => {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ block: "center", behavior: "smooth" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Fade>
        <div className={style.container}>
          <div className={style.imgBg}>
            <div className={style.title_container}>
              <img src={icon_liberia} alt="liberia silouette map" />
              <h2>Liberia</h2>
            </div>
            <button onClick={executeScroll} className={style.arrow_container}>
              <img src={arrow} alt="scroll arrow" />
            </button>
          </div>
        </div>
      </Fade>
      <div ref={myRef} className={style.flex_container}>
        <Media
          queries={{
            small: "(max-width: 869px)",
            large: "(min-width: 870px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <Parallax
                  className={style.text_container}
                  x={[20, 40]}
                  tagOuter="figure"
                >
                  <h3 style={{ fontSize: "30px" }}>
                    I can work to save my people.
                  </h3>
                  <p>
                    Yamah, a midwife and supervisor of a maternal health clinic.
                  </p>
                </Parallax>
              )}
              {matches.large && (
                <Parallax
                  className={style.text_container}
                  x={[-30, 30]}
                  tagOuter="figure"
                >
                  <h3>I can work to save my people.</h3>
                  <p>
                    Yamah, a midwife and supervisor of a maternal health clinic.
                  </p>
                </Parallax>
              )}
            </Fragment>
          )}
        </Media>
        <ParallaxYamahFace />
        <div className={style.line}>
          <img src={line} alt="line" />
        </div>
      </div>
      <ParallaxYamahEbola />
      <Media
        queries={{
          small: "(max-width: 869px)",
          large: "(min-width: 870px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <Parallax
                className={style.ebola_text_container}
                x={[-50, -60]}
                tagOuter="figure"
              >
                <h4 style={{fontSize:'20px'}}>
                  The epidemic devastated Liberia’s fragile healthcare system.
                  Maternal deaths surged. But{" "}
                  <span style={{ color: "#D99E94" }}>even here</span>, midwives
                  like Yamah persevered in tending to mothers and their
                  newborns.{" "}
                </h4>
              </Parallax>
            )}
            {matches.large && (
              <Parallax
                className={style.ebola_text_container}
                x={[30, 20]}
                tagOuter="figure"
              >
                <h4>
                  The epidemic devastated Liberia’s fragile healthcare system.
                  Maternal deaths surged. But{" "}
                  <span style={{ color: "#D99E94" }}>even here</span>, midwives
                  like Yamah persevered in tending to mothers and their
                  newborns.{" "}
                </h4>
              </Parallax>
            )}
          </Fragment>
        )}
      </Media>

      <ParallaxWomanBaby />
      <VideoComponent />
      <ChangeBgImg />
      <SafeBirthComponent />
    </>
  );
};

export default StoryLiberia;
