import React, { useState, useLayoutEffect, useRef } from "react";
import style from "../../styles/progressCircle.module.scss";
import mouse_icon from "../../images/icons/scroll_mouse_icon.png";
import LandingScratch from "../Intro/LandingScratch";

const DIAMETER = 50;
const STROKE_WIDTH = 0.3;
const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = Math.PI * RADIUS * 2;

const ProgressCircle = () => {
  const circleRef = useRef();
  const [progress, setProgress] = useState(0);
  const position = Math.max(1 - progress, 0);
  const complete = position === 0;

  // We use the useLayoutEffect hook instead of useEffect because we want to measure the height of our article before the user sees it and then we can accurately update the status the user has read in the event the scroll position starts down the page.
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (!circleRef.current) return;
      const { height } = circleRef.current.getBoundingClientRect();
      setProgress(window.scrollY / (window.innerHeight + height));
    };
    updateHeight();
    window.addEventListener("scroll", updateHeight);
    return () => {
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  return (
    <div ref={circleRef}>
      {complete ? (
          <LandingScratch />
      ) : (
        <button className={style.button}>
          <svg
            viewBox="0 0 50 50"
            width="27vw"
            height="27vw"
            className="circle-progress"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e00000" />
                <stop offset="45%" stopColor="#ffff00" />
                <stop offset="65%" stopColor="#00ff88" />
                <stop offset="100%" stopColor="#00ffea" />
              </linearGradient>
            </defs>
            <circle
              cx={DIAMETER / 2}
              cy={DIAMETER / 2}
              r={RADIUS}
              stroke="url(#gradient)"
              fill="transparent"
              strokeWidth={STROKE_WIDTH}
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: CIRCUMFERENCE * position,
              }}
            />
          </svg>
          <img
            className={style.mouseIcon}
            src={mouse_icon}
            alt="mouse scroll icon"
          />
        </button>
      )}
    </div>
  );
};

export default ProgressCircle;
