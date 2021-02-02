import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // if (typeof window !== "undefined") {
  //   require("smooth-scroll")('a[href*="#"]')
  // }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className={styles.page}>{children}</main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
