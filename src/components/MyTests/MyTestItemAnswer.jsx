import React from 'react'
import styles from "../../styles/testConstructor.module.css"

const MyTestItemAnswer = ({ answer }) => {
  return (
    <div className={styles.answerRow}>
      {answer.isRight ?
        <input className={styles.myCheckbox} type="checkbox" checked onClick={false} />
        : <input className={styles.myCheckbox} type="checkbox" disabled onClick={false} />}
      <div className={styles.myAnswer}>{answer.answer}</div>
    </div>
  )
}

export default MyTestItemAnswer