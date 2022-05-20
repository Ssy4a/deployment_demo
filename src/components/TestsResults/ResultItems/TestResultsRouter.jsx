import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TestResult from './TestResult';
import TestsResultsNav from './TestsResultsNav';

const TestResultsRouter = ({ results, test }) => {

    const resultsWithMatchingId = results.filter(item => item.test === test._id)

    return (
        <div>
            <Routes>
                <Route element={<TestsResultsNav resultsWithMatchingId={resultsWithMatchingId} test={test} />} path="" />
                {resultsWithMatchingId.map((result, id) => <Route element={<TestResult result={results[id]} test={test} />} key={test._id} path={result._id} />)}
            </Routes>
        </div>
    )
}

export default TestResultsRouter