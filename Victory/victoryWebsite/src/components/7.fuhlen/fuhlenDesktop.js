import React from "react"
import styles from "./fuhlen.module.scss"

import FuhlenImgDesktop from "./fuhlenImgDesktop"
import gif from "../../gif/victory.gif"

const FuhlenDesktop = () => {
  return (
    <div className={styles.fulhen_container}>
      <FuhlenImgDesktop />
      <h1>FÜHLEN DEN SIEG</h1>
      <div className={styles.container}>
        <div><img src={gif} alt="macbook gif" /></div>
        <div>
          <h2>DAS KRONJUWEL</h2>
          <h5>
            Für Kunden, die keine eigenen Kollektionen entwickeln wollen, haben
            wir ebenfalls eine Lösung.
          </h5>
          <p style={{ color: "#1D1F2AB3", paddingTop: 0 }}>
            Victory Shop ist eine digitale Zentrale, in der die wichtigsten
            europäischen Grosshändlernzusammenleben. Das Beste aus ihren
            Produkten in einem einzigen Warenkorb. Sie benötigen nur ein paar
            Klicks.
          </p>
          <button><a href="https://www.victoryshop.ch/en/" rel="noreferrer" target="_blank">VICTORY SHOP</a></button>
        </div>
      </div>
    </div>
  )
}

export default FuhlenDesktop
