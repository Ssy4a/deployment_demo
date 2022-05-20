import React from 'react'
import styles from "../../styles/UIElements.module.css"

const TextAreaElement = ({ value, onChange, placeholder, addedClass }) => {
    const classNames = `${styles.textAreaElement} ${styles[addedClass]}`
    return (
        <textarea placeholder={placeholder} className={classNames}
         onChange={onChange} value={value} />
    )
}

export default TextAreaElement