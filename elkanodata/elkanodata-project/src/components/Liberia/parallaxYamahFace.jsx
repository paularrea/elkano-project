import React, { Fragment } from "react";
import Media from "react-media";
import foto_face from "../../images/foto2.jpg";
import { Parallax } from "react-parallax";

const ParallaxYamahFace = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 869px)",
          large: "(min-width: 870px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <Parallax bgImage={foto_face} strength={-40}>
                <div style={{ height: "30vh", width: "70vw" }}></div>
              </Parallax>
            )}
            {matches.large && (
              <Parallax bgImage={foto_face} strength={-100}>
                <div style={{ height: "35vw", width: "60vw" }}></div>
              </Parallax>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
};

export default ParallaxYamahFace;
