import React from 'react'
import styles from "../../styles/UIElements.module.css"

const ButtonElement = ({ onClick, text, addedClass, disabled }) => {
    const classNames = `${styles.button} ${styles[addedClass]}`
    return (
        <button className={classNames} onClick={onClick} disabled={disabled}>
            <span></span>{text}
        </button>
    )
}

export default ButtonElement