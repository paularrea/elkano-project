import React, { useState, Fragment } from "react";
import Media from "react-media";
import { Parallax } from "react-scroll-parallax";
import playIcon from "../../images/icons/a_btn_play.png";
import styles from "../../styles/video.module.scss";
import video from "../../video/JOSIE.mp4";

const VideoComponent = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const clickToPlay = () => {
    setPlayVideo(true);
  };

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
            <div className={styles.video_container}>
              {playVideo ? (
                <Parallax x={[0, 0]} tagOuter="figure">
                  <div>
                    <video controls autoPlay muted className={styles.video}>
                      <source src={video} type="video/mp4" />
                      <source src={video} type="video/ogg" />
                    </video>
                  </div>
                </Parallax>
              ) : (
                <Parallax x={[0, 0]} tagOuter="figure">
                  <div className={styles.video_container_img}>
                    <img
                      src={playIcon}
                      alt="play icon"
                      className={styles.play_icon}
                      onClick={clickToPlay}
                    />
                  </div>
                </Parallax>
              )}
            </div>
          )}
          {matches.large && (
            <div className={styles.video_container}>
              {playVideo ? (
                <Parallax y={[10, -10]} tagOuter="figure">
                  <div>
                    <video controls autoPlay muted className={styles.video}>
                      <source src={video} type="video/mp4" />
                      <source src={video} type="video/ogg" />
                    </video>
                  </div>
                </Parallax>
              ) : (
                <Parallax y={[10, -10]} tagOuter="figure">
                  <div className={styles.video_container_img}>
                    <img
                      src={playIcon}
                      alt="play icon"
                      className={styles.play_icon}
                      onClick={clickToPlay}
                    />
                  </div>
                </Parallax>
              )}
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default VideoComponent;
