import React from "react"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styles from "../header.module.scss"
import Logo from "../components/logo"

const DesktopHeader = () => {
//   const [selectedHome, setSelectedHome] = useState(false)
//   const [selectedServices, setSelectedServices] = useState(false)
//   const [selectedAbout, setSelectedAbout] = useState(false)

//   const homeLink = selectedHome ? styles.active : styles.disabled
//   const servicesLink = selectedServices ? styles.active : styles.disabled
//   const aboutLink = selectedAbout ? styles.active : styles.disabled

  return (
    <header>
      <div className={styles.navBar}>
        <nav className={styles.logo_nav_container}>
          <AnchorLink id="logo" to="/#home">
            <Logo />
          </AnchorLink>
          <AnchorLink
            // className={homeLink}
            // onAnchorLinkClick={
            //   (() => setSelectedHome(true),
            //   setSelectedServices(false),
            //   setSelectedAbout(false))
            // }
            id="home"
            to="/#home"
          >
            HAUS
          </AnchorLink>
          <AnchorLink
            // className={servicesLink}
            // onAnchorLinkClick={
            //   (() => setSelectedHome(false),
            //   setSelectedServices(true),
            //   setSelectedAbout(false))
            // }
            id="services"
            to="/#services"
          >
            SERVICES
          </AnchorLink>
          <AnchorLink
            // className={aboutLink}
            // onAnchorLinkClick={
            //   (() => setSelectedHome(false),
            //   setSelectedServices(false),
            //   setSelectedAbout(true))
            // }
            id="about"
            to="/about"
          >
            ÜBER UNS
          </AnchorLink>
        </nav>
        <div>
          <button> <a href="https://www.victoryshop.ch/en/" rel="noreferrer" target="_blank">VICTORY SHOP</a></button>
        </div>
      </div>
    </header>
  )
}

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
}

export default DesktopHeader
