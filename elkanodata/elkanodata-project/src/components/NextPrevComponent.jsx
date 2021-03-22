import React from 'react'
import styles from "../styles/next-prev.module.scss"
import line from "../images/icons/line2.jpg"
import prev from "../images/prev.jpg"
import next from "../images/next.jpg"

const NextPrevComponent = () => {
    return (
        <div className={styles.container}>
            <p>See other stories</p>
            <img src={line} alt="line decoration"/>
            <div className={styles.flex_container}>
            <div>
                <h2>Kenya</h2>
                <img src={prev} alt="previous link"/>
            </div>
            <div>
                <h2>Liberia</h2>
                <img src={next} alt="next link"/>
            </div>
            </div>
        </div>
    )
}

export default NextPrevComponent
