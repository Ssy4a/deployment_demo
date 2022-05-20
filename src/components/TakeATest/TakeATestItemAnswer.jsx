import React from 'react'
import LoadingElement from '../UI/LoadingElement'
import styles from "./../../styles/testConstructor.module.css"

const TakeATestItemAnswer = ({ answer, answerId, testItemId, setIsRightArr, isRightArrTestItem, isRightArr }) => {

    const checkboxHandler = () => {
        setIsRightArr(isRightArr.map((item, id) => {
            if (id === testItemId) return item.map((item, id) => {
                if (id === answerId) return !item
                return item
            })
            return item
        }))
    }

    if (isRightArrTestItem) return (
        <div className={styles.answerRow}>
            <input className={styles.checkbox} type="checkbox" checked={isRightArr[testItemId][answerId]} onChange={checkboxHandler}></input>
            <div className={styles.myAnswer}>{answer.answer}</div>
        </div>
    )
    return <LoadingElement />
}

export default TakeATestItemAnswer