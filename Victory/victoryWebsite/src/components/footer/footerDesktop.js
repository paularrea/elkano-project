import React from "react"
import Logo from "../header/components/logo"

import styles from "./footer.module.scss"

import LinkedInIcon from "../icons/media-icons/linkedinIcon"
import FacebookIcon from "../icons/media-icons/fbIcon"
import YoutubeIcon from "../icons/media-icons/youtubeIcon"
import TwitterIcon from "../icons/media-icons/twitterIcon"
import InstagramIcon from "../icons/media-icons/instaIcon"

import LocationIcon from "../icons/contact-icons/locationIcon"
import MailIcon from "../icons/contact-icons/mailIcon"
import PhoneIcon from "../icons/contact-icons/phoneIcon"

const FooterDesktop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex_container}>
        <div className={styles.logo_text}>
          <Logo />
          <p>
            Victory Switzerland GmbH has been active as an import / wholesaler
            since it was founded in 2012 and makes worldwide purchases for its
            customers. Due to the diversity of our customers, our range is
            constantly being expanded; We import over 1000 new items every year.
          </p>
        </div>
        <div className={styles.contact}>
          <h3>Haben Sie Fragen?</h3>
          <div className={styles.contact_div}>
            <div className={styles.contact_icons}>
              <LocationIcon />
            </div>
            <div>
              <p>Solothurnstrasse 24 C, 3422 Kirchberg Bern Schweiz</p>
            </div>
          </div>
          <div className={styles.contact_div}>
            <div className={styles.contact_icons}>
              <PhoneIcon />
            </div>
            <div>
              <p>+41 31 301 94 39</p>
            </div>
          </div>
          <div className={styles.contact_div}>
            <div className={styles.contact_icons}>
              <MailIcon />
            </div>
            <div>
              <p>info@victoryswitzerland.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.flex_container}>
        <div className={styles.follow_container}>
          <ul className={styles.media_list}>
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
        <div className={styles.copyright}>
          <p>© Alle Rechte vorbehalten</p>
        </div>
      </div>
    </div>
  )
}

export default FooterDesktop
