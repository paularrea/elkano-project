import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MediaQuery from "react-responsive"
import DesktopHeader from "./components/desktopHeader"

import styles from "./header.module.scss"
import Logo from "./components/logo"
import Burger from "./components/burger"

const Header = () => (
  <>
    <MediaQuery maxWidth={800}>
      <header>
        <div className={styles.navBar}>
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div>
            <Burger />
          </div>
        </div>
      </header>
    </MediaQuery>
    <MediaQuery minWidth={800}>
      <DesktopHeader />
    </MediaQuery>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
