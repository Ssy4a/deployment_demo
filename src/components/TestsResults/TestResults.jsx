import React from 'react'
import ResultLink from './ResultItems/ResultLink'
import styles from "../../styles/content.module.css"

const TestResults = ({ results, test }) => {

    const resultsWithMatchingId = results.filter((item) => {
        if (item.test === test._id) return item
    })

    return (
        <div className={styles.contentFont}>
            {resultsWithMatchingId.map(result => <ResultLink result={result} />)}
        </div>
    )
}

export default TestResults