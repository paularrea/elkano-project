import React from "react"
import styles from "./blog.module.scss"

import BlogImgOne from "./blogImgOne"
import BlogImgTwo from "./blogImgTwo"
import BlogImgThree from "./blogImgThree"

const Blog = () => {
  return (
    <div className={styles.container}>
      <h2>VIKTOR BLOG</h2>
      <div className={styles.post_container}>
        <div className={styles.post}>
          <BlogImgOne />
          <h5>Article 1 title</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy.
          </p>
          <small>20/JAN/2021</small>
        </div>
        <div className={styles.post}>
          <BlogImgTwo />
          <h5>Article 2 title</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy.
          </p>
          <small>20/JAN/2021</small>
        </div>
        <div className={styles.post}>
          <BlogImgThree />
          <h5>Article 3 title</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy.
          </p>
          <small>20/JAN/2021</small>
        </div>
      </div>
    </div>
  )
}

export default Blog
