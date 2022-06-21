import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { fetchUserTests } from '../../asyncActions/userTests';
import LoadingElement from '../UI/LoadingElement';
import MyTest from './MyTest';
import MessageElement from './../UI/MessageElement';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MyTestItems from './MyTestItems';
import styles from "../../styles/content.module.css"
import ErrorPage from '../Pages/ErrorPage';
import TitleElement from './../UI/TitleElement';
import { fetchActiveTests } from './../../asyncActions/activeTests';

const MyTests = () => {
    const dispatch = useDispatch()
    const userId = localStorage.getItem("userId")
    const myTests = useSelector(state => state.userTests)

    useEffect(() => {
        dispatch(fetchActiveTests())
    }, [])

    useEffect(() => {
        if (userId) {
            dispatch({ type: "SET_USER_TESTS_IS_LOADING", payload: true })
            dispatch(fetchUserTests(userId))
        }
    }, [])

    function NoTests() {
        if (myTests.isLoading) return <LoadingElement />
        if (myTests.error) return <MessageElement type="error" message={myTests.error} />
        return <div className={styles.message}>У вас немає тестів! Створіть <Link to="/newTest">новий тест</Link>. </div>
    }

    const ErrorTests = () => {
        return (
            <div>
                <TitleElement text="Ваші тести:" />
                <ErrorPage addedClass="errorNoShadow"
                    notExistingItemName="тесту" backButtonText="Назад до списку тестів" />
            </div>
        )
    }

    return (
        <div>
            <div className={styles.contentFont}>
                <Routes>
                    <Route path="*" element={<ErrorTests />} />
                    <Route element={<MyTest myTests={myTests} userId={userId} />} path={""} />
                    {
                        myTests.myTests.map(test => <Route key={test._id} element={<MyTestItems test={test} userId={userId} />} path={test._id} />)
                    }
                </Routes>
                {myTests.myTests.length === 0 && <NoTests />}
            </div>
        </div>
    )

}

export default MyTests