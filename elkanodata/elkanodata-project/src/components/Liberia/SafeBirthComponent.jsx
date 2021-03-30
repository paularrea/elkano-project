import React, { useState, useEffect, Fragment } from "react";
import Media from "react-media";
import styles from "../../styles/safebirth.module.scss";

const SafeBirthComponent = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, [animate]);

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
            <div className={styles.container}>
              <div className={animate ? styles.expansion : styles.cercle}></div>
              <div className={styles.outline2}>
                <div className={styles.outline}>
                  <button style={{fontSize:'20px'}} onClick={() => setAnimate(true)}>
                    safe birth
                    <br />
                    starts here
                  </button>
                </div>
              </div>
            </div>
          )}
          {matches.large && (
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
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default SafeBirthComponent;
