import React from 'react'
import { useState } from 'react';
import LoadingElement from '../UI/LoadingElement';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserTests } from '../../asyncActions/userTests';
import TestResultNav from './TestResultNav';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import TestResultsRouter from './ResultItems/TestResultsRouter';
import MessageElement from './../UI/MessageElement';
import { UrlAPI } from './../../constants';
import styles from "../../styles/content.module.css"

const TestsResultsRoutes = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState(null)
    const dispatch = useDispatch()
    const userId = localStorage.getItem("userId")
    const myTests = useSelector(state => state.userTests)

    useEffect(() => {
        if (userId) {
            dispatch({ type: "SET_USER_TESTS_IS_LOADING", payload: true })
            dispatch(fetchUserTests(userId))
        }

        let cleanupFunction = false
        fetch(`${UrlAPI}/tests/testResults`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}`
            }
        })
            .then(res => {
                if (!cleanupFunction) {
                    if (res.ok) {
                        return res.json()
                    }
                    else return res.json().then(function (object) {
                        throw Error(object.message)
                    })
                }
            })
            .then(json => {
                if (!cleanupFunction) { setResults(json) }
            })
            .catch(err => setError(err.message))
            .finally(() => {
                if (!cleanupFunction) { setLoading(false) }
            })

        return () => cleanupFunction = true
    }, [])

    const getPath = (path) => {
        return `${path}/*`
    }

    const getIsLoading = () => {
        if (loading) return true
        if (myTests.isLoading) return true
        return false
    }

    return (
        <div className={styles.contentFont}>
            {loading || myTests.isLoading
                ? <LoadingElement />
                : <Routes>
                    <Route element={<TestResultNav getIsLoading={getIsLoading} myTests={myTests.myTests} />} path="" />
                    {myTests.myTests.map(test => <Route element={<TestResultsRouter results={results} test={test} />} key={test._id} path={getPath(test._id)} />)}
                </Routes>
            }
            {error && <MessageElement type="error" message={error} />}
        </div>
    )
}

export default TestsResultsRoutes