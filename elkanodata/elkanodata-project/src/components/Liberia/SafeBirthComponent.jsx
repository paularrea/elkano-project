import React, { useState, useEffect } from "react";
import styles from "../../styles/safebirth.module.scss";

const SafeBirthComponent = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, [animate]);

  return (
    <div className={styles.container}>
      <div className={animate ? styles.expansion : styles.cercle}></div>
      <div className={styles.outline2}>
      <div className={styles.outline}>
          <button onClick={() => setAnimate(true)}>
            safe birth
            <br />
            starts here
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafeBirthComponent;
