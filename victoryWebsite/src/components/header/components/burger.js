import React, { useState } from "react"
import { fallDown as Menu } from "react-burger-menu"
import "./burger.css"
import Logo from "./logo"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import LinkedInIcon from "../../icons/media-icons/linkedinIcon"
import FacebookIcon from "../../icons/media-icons/fbIcon"
import YoutubeIcon from "../../icons/media-icons/youtubeIcon"
import TwitterIcon from "../../icons/media-icons/twitterIcon"
import InstagramIcon from "../../icons/media-icons/instaIcon"

const Burger = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <div className="hideBar"></div>
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
      >
        <div className="logo-menu">
          <Logo />
        </div>
        <AnchorLink id="home" className="menu-item" to="/#home">
          <div
            role="link"
            className="anchor-div"
            onClick={() => {
              closeMenu()
            }}
            onKeyDown={() => {
              closeMenu()
            }}
            tabIndex={0}
          >
            {" "}
            HAUS
          </div>
        </AnchorLink>
        <hr />
        <AnchorLink id="services" className="menu-item" to="/#services">
          <div
            role="link"
            className="anchor-div"
            onClick={() => {
              closeMenu()
            }}
            onKeyDown={() => {
              closeMenu()
            }}
            tabIndex={0}
          >
            {" "}
            SERVICES
          </div>
        </AnchorLink>
        <hr />
        <AnchorLink id="about" className="menu-item" to="/about">
          <div
            role="link"
            className="anchor-div"
            onClick={() => {
              closeMenu()
            }}
            onKeyDown={() => {
              closeMenu()
            }}
            tabIndex={0}
          >
            {" "}
            ÜBER UNS
          </div>
        </AnchorLink>
        <div className="follow-container">
          <hr />
          <h3>Folge uns</h3>
          <ul className="media-list">
            <li>
              <InstagramIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
      </Menu>
    </>
  )
}

export default Burger
