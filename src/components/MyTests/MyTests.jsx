import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserTests } from '../../asyncActions/userTests';
import LoadingElement from '../UI/LoadingElement';
import MyTest from './MyTest';
import MessageElement from './../UI/MessageElement';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MyTestItems from './MyTestItems';
import styles from "../../styles/content.module.css"
import TitleElement from './../UI/TitleElement';

const MyTests = () => {
    const dispatch = useDispatch()
    const userId = localStorage.getItem("userId")
    const myTests = useSelector(state => state.userTests)

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

    return (
        <div>
            <div className={styles.contentFont}>
                {myTests.myTests.length === 0 && <NoTests />}
                <Routes>
                    <Route element={<MyTest myTests={myTests} userId={userId} />} path={""} />
                    {
                        myTests.myTests.map(test => <Route key={test._id} element={<MyTestItems test={test} userId={userId} />} path={test._id} />)
                    }
                </Routes>
            </div>
        </div>
    )

}

export default MyTests