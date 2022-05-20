import React from 'react'
import TestResultAnswer from './TestResultAnswer';
import styles from "../../../styles/testConstructor.module.css"

const TestResultItem = ({ testItem, testResultsChecked, testResults, testItemResults }) => {

    const getTestItemStyles = () =>{
        if (testItemResults === true) return `${styles.testItem} ${styles.rightTestItem}`
        else return `${styles.testItem} ${styles.wrongTestItem}`
    }

    return (
        <div className={getTestItemStyles()}>
            <div className={styles.myQuestion}>
                {testItem.question}
            </div>
            {testItem.answers.map((answer, id) => <TestResultAnswer testAnswersResultsChecked={testResultsChecked[id]}
                testAnswersResults={testResults[id]} answer={answer} key={answer._id} />)}
        </div >
    )
}

export default TestResultItem