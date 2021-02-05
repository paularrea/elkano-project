import React from "react"
import styles from "./produktion.module.scss"
import ProduktionImg from "./productionImg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ProduktionDesktop = () => {
  return (
    <div className={styles.container}>
      <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
        <h2>PRODUKTION</h2>
        <h5>
          Das perfekte Produkt herzustellen ist eine Herausforderung die wir
          schätzen, weil wir alles tun, um sie zu erfüllen.
        </h5>
        <hr className={styles.hr} />
      </div>
      <div className={styles.flex_container}>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className={styles.text_container}
        >
          <p>
            Wir finden die richtige Fabrik aus einer weltweiten Auswahl und
            nutzen unsere Erfahrung und unseren Einfluss, um Ihnen einen
            besseren Preis zu bieten, als Ihr Unternehmen allein erzielen
            könnte.
          </p>
          <br />
          <p>
            Wenn Sie in unsere Dienstleistungen investieren, sparen Sie Zeit und
            Geld. Ihr CFO wird uns lieben.
          </p>
          <br />
          <br />
          <p style={{ color: "#FFFFFFB3", opacity: "60%" }}>
            Heute haben Sie Zugang zu noch nie dagewesenen Möglichkeiten, ein
            neues Produkt zu dem Preis, in der Qualität und in dem Umfang
            herzustellen, den Sie benötigen. Das Angebot ist so gross, dass man
            sich verlaufen kann. Ein weiterer Grund, mit uns zu arbeiten.
          </p>
          <AnchorLink to="/#contact">
            <button>PRODUKTION STARTEN</button>
          </AnchorLink>
        </div>
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className={styles.img_container}
        >
          <ProduktionImg />
        </div>
      </div>
    </div>
  )
}

export default ProduktionDesktop
