import React, { useState } from "react";
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
    <div className={styles.video_container}>
      {playVideo ? (
        <Parallax x={[10, -10]} tagOuter="figure">
          <div>
            <video controls autoPlay muted className={styles.video}>
              <source src={video} type="video/mp4" />
              <source src={video} type="video/ogg" />
            </video>
          </div>
        </Parallax>
      ) : (
        <Parallax x={[10, -10]} tagOuter="figure">
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
  );
};

export default VideoComponent;
