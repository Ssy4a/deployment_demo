import React from 'react'
import { Routes, Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TestResult from './TestResult';
import TestsResultsNav from './TestsResultsNav';
import ErrorPage from './../../Pages/ErrorPage';

const TestResultsRouter = ({ results, test }) => {

    const resultsWithMatchingId = results.filter(item => item.test === test._id)

    return (
        <div>
            <Routes>
                <Route path="*" element={<ErrorPage notExistingItemName="результату тестування"
                    backButtonText="Назад до списку результатів" addedClass="errorNoShadow" />} />
                <Route element={<TestsResultsNav resultsWithMatchingId={resultsWithMatchingId} test={test} />} path="" />
                {resultsWithMatchingId.map((result, id) => <Route element={<TestResult result={result} test={test} />} key={test._id} path={result._id} />)}
            </Routes>
        </div>
    )
}

export default TestResultsRouter