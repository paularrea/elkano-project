import React, { useState } from "react";
import playIcon from "../images/icons/a_btn_play.png";
import styles from "../styles/video.module.scss";
import video from "../video/JOSIE.mp4";

const VideoComponent = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const clickToPlay = () => {
    setPlayVideo(true);
  };

  return (
    <div className={styles.video_container}>
      {playVideo ? (
        <div>
          <video controls autoPlay className={styles.video}>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
          </video>
        </div>
      ) : (
        <div className={styles.video_container_img}>
          <img
            src={playIcon}
            alt="play icon"
            className={styles.play_icon}
            onClick={clickToPlay}
          />
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
