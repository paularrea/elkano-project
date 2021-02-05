import React from "react"
import styles from "./fuhlen.module.scss"
import MediaQuery from "react-responsive"

import FuhlenDesktop from "./fuhlenDesktop"
import FuhlenImg from "./fuhlenImg"
import FuhlenImgTwo from "./fuhlenImgTwo"

const Fuhlen = () => {
  return (
    <>
      <MediaQuery maxWidth={800}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <FuhlenImg />
        </div>
        <div className={styles.fulhen_container}>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
          >
            <h1>FÜHLEN DEN SIEG</h1>
          </div>
          <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
            <FuhlenImgTwo />
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={styles.container}
          >
            <h2>DAS KRONJUWEL</h2>
            <h5>
              Für Kunden, die keine eigenen Kollektionen entwickeln wollen,
              haben wir ebenfalls eine Lösung.
            </h5>
            <h5 style={{ color: "#1D1F2AB3", paddingTop: 0 }}>
              Victory Shop ist eine digitale Zentrale, in der die wichtigsten
              europäischen Grosshändlernzusammenleben. Das Beste aus ihren
              Produkten in einem einzigen Warenkorb. Sie benötigen nur ein paar
              Klicks.
            </h5>
            <button>
              <a
                href="https://www.victoryshop.ch/en/"
                rel="noreferrer"
                target="_blank"
              >
                VICTORY SHOP
              </a>
            </button>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <FuhlenDesktop />
      </MediaQuery>
    </>
  )
}

export default Fuhlen
