import React from "react"
import HomeImgDesktop from "./homeImgDesktop"
import styles from "./intro.module.scss"

const DesktopIntro = () => {
  return (
    <div id='home' className={styles.container}>
      <div className={styles.intro_container}>
        <h2>B2B Unternehmen auf dem schweizer Markt</h2>
        <h4>Wir verkaufen spezifische Lösungen.</h4>
        <div className={styles.btn_container}>
          <button>RUFEN SIE UNS AN</button>
          <button>DEN SHOP BESUCHEN</button>
        </div>
      </div>
    <HomeImgDesktop/>
    </div>
  )
}

export default DesktopIntro
