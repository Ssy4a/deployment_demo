import React from 'react'
import styles from "../../styles/UIElements.module.css"
import { useEffect, useRef } from 'react';

const InputElement = ({ value, onChange, placeholder, addedClass, onFocus, isAnswer }) => {
    const classNames = `${styles.inputElement} ${styles[addedClass]}`
    const input = useRef()

    useEffect(() => {
        if (isAnswer) {
            if (!onFocus) input.current.focus()
        }
    }, [])

    return (
        <div className={classNames}>
            <input onChange={onChange} value={value} onFocus={onFocus} ref={input} required />
            <label>{placeholder}</label>
        </div>
    )
}

export default InputElement