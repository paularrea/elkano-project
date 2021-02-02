import React from "react"
import styles from "./infography.module.scss"
import MediaQuery from "react-responsive"
import InfographyDesktop from "./infographyDesktop"

const Infography = () => {
  return (
    <>
      <MediaQuery maxWidth={700}>
        <div className={styles.container}>
          <div className={styles.infography_container}></div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={700}>
        <InfographyDesktop/>
      </MediaQuery>
    </>
  )
}

export default Infography
