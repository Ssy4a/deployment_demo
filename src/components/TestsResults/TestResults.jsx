import React from 'react'
import ResultLink from './ResultItems/ResultLink'

const TestResults = ({ results, test }) => {

    const resultsWithMatchingId = results.filter((item) => {
        if (item.test === test._id) return item
    })

    return (
        <div>
            {resultsWithMatchingId.map(result => <ResultLink result={result} />)}
        </div>
    )
}

export default TestResults