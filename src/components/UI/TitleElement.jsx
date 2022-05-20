import React from 'react'
import styles from "../../styles/UIElements.module.css"

const TitleElement = ({ text, addedClass }) => {
    const classNames = `${styles.titleElement} ${styles[addedClass]}`
    return (
        <div className={classNames}>{text}</div>
    )
}

export default TitleElement