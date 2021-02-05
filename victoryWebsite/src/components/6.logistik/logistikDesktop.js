import React from "react"
import styles from "./logistik.module.scss"
import LogistikImg from "./logistikImg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Masonry from "react-masonry-css"
import "./masonry.css"

import LogistikOne from "../icons/logistic-icons/logistikOne"
import LogistikTwo from "../icons/logistic-icons/logistikTwo"
import LogistikThree from "../icons/logistic-icons/logistikThree"
import LogistikFour from "../icons/logistic-icons/logistikFour"
import LogistikFive from "../icons/logistic-icons/logistikFive"

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
}

const LogistikDesktop = () => {
  return (
    <div className={styles.container}>
      <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
        <h2>LOGISTIK</h2>
        <h5>
          Wir bieten logistische Dienstleistungen immer mit der Garantie und
          Qualität an. Unser Team stellt sich auf Ihre Bedürfnisse ein und
          bietet Ihnen massgeschneiderte Angebote zum besten Preis. Unsere
          Arbeit ist beendet, wenn unser Kunde seine Ware erhält und fühlt den
          Sieg!
        </h5>
      </div>
      <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
        <h4>Unser Team Garantiert:</h4>
      </div>
      <div className={styles.bullet_container}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={styles.bullet}
          >
            <LogistikOne />
            <h5>Konservierung der Produkte</h5>
            <p>
              In der Zwischenzeit wird die Übertragung und Lagerung der Produkte
              fortgesetzt.
            </p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="1000"
            className={styles.bullet}
          >
            <LogistikTwo />
            <h5>Kennzeichnung</h5>
            <p>
              Sie vermittelt relevante Daten über die Eigenschaften oder
              Qualitäten des Produkts und die Art und Weise, wie es gehandhabt
              wird, und verringert so die Möglichkeit von Verschleiß oder
              Verlust.
            </p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1000"
            className={styles.bullet}
          >
            <LogistikThree />
            <h5>Handhabung des Produkts</h5>
            <p>
              Erleichtert das Zählen, Verteilen und Transportieren von
              Verpackungsmaterialien und Packstücken.
            </p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-duration="1000"
            className={styles.bullet}
          >
            <LogistikFour />
            <h5>Lagerverwaltung</h5>
            <p>
              Wir haben Lagerhäuser, in denen wir Ihre Bestände aufbewahren und
              organisieren. Dieses Management wird je nach Bedarf mit unserem
              Kunden verhandelt.
            </p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-duration="1000"
            className={styles.bullet}
          >
            <LogistikFive />
            <h5>Effizienter Versorgungskreislauf</h5>
            <p>
              Sie führt zu einem preiswerten Angebot, dass den Endprodukt Preis
              und den Verbraucher positiv beeinflusst. Unser Team wird Ihnen
              gerne eine massgeschneiderte Lösung anbieten.
            </p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-duration="1000"
            className={styles.img_btn}
          >
            <LogistikImg />
            <div className={styles.button}>
              <AnchorLink to="/#contact">
                <button>BERATUNG EINHOLEN</button>
              </AnchorLink>
            </div>
          </div>
        </Masonry>
      </div>
    </div>
  )
}

export default LogistikDesktop
