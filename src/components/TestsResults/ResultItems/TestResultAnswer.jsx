import React from 'react'
import styles from "../../../styles/testConstructor.module.css"

const TestResultAnswer = ({ answer, testAnswersResultsChecked, testAnswersResults }) => {

    const getIsRightClass = () => {
        if (testAnswersResultsChecked === true) return "rightAnswer"
        if (testAnswersResultsChecked === false) return "wrongAnswer"
    }

    return (
        <div className={styles.answerRow}>
            <input type="checkbox" checked={testAnswersResults} onClick={() => false} className={styles.myCheckbox} />
            <div className={`${styles.myAnswer} ${styles[getIsRightClass()]}`}>
                {answer.answer}
            </div>
        </div>
    )
}

export default TestResultAnswer