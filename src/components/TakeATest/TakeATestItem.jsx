import React from 'react'
import TakeATestItemAnswer from './TakeATestItemAnswer';
import styles from "./../../styles/testConstructor.module.css"

const TakeATestItem = ({ testItem, testItemId, setIsRightArr, isRightArr }) => {

    return (
        <div className={styles.testItem}>
            <div className={styles.myQuestion}>{testItem.question}</div>
            {testItem.answers.map((answer, id) =>
                <TakeATestItemAnswer answer={answer} key={answer._id} answerId={id} testItemId={testItemId}
                    isRightArrTestItem={isRightArr[testItemId]} setIsRightArr={setIsRightArr} isRightArr={isRightArr} />)}
        </div>
    )
}

export default TakeATestItem