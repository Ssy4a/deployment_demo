import React from 'react'
import styles from "../../styles/UIElements.module.css"

const LoadingElement = ({ addedClass }) => {
  return (
    <div className={`${styles.loading} ${styles[addedClass]}`}></div>
  )
}

export default LoadingElement