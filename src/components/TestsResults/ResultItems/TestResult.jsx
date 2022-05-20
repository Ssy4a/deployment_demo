import React from 'react'
import TestResultItem from './TestResultItem';
import styles from "../../../styles/content.module.css"
import TitleElement from './../../UI/TitleElement';
import { getRating } from './../../../functions/getRating';

const TestResult = ({ result, test }) => {

    return (
        <div className={styles.contentFont}>
            <TitleElement text={test.name} />
            <TitleElement text={test.description} addedClass="secondTitle" />
            <div>
                {test.testItems.map((testItem, id) => <TestResultItem testResultsChecked={result.TestResultsChecked[id]}
                    testResults={result.answers[id]} testItemResults={result.answerCorrectnessArr[id]} testItem={testItem} key={testItem._id} />)}
            </div>
            <br></br>
            <TitleElement text={`Оцінка: ${getRating(result)}`} addedClass="secondTitle" />
        </div>
    )
}

export default TestResult