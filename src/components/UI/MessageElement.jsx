import React from 'react'
import styles from "../../styles/UIElements.module.css"

const MessageElement = ({ message, type, addedClass }) => {

  const className = `${styles.message} ${styles[type]} ${styles[addedClass]}`
  
  return (
    <div className={className}>
      <span>УВАГА: </span>{message}
    </div>
  )
}

export default MessageElement