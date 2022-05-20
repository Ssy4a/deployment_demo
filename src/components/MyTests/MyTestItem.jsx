import React from 'react'
import MyTestItemAnswer from './MyTestItemAnswer'
import styles from "../../styles/testConstructor.module.css"

const MyTestItem = ({ testItem }) => {
    return (
        <div className={styles.testItem}>
            <div className={styles.myQuestion}>{testItem.question}</div>
            <div>{testItem.answers.map(answer => <MyTestItemAnswer answer={answer} key={answer._id} />)}</div>
        </div>
    )
}

export default MyTestItem