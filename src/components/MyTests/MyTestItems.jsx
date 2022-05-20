import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyTestItem from './MyTestItem'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserTests } from '../../asyncActions/userTests';
import { useEffect } from 'react';
import { fetchActiveTests } from './../../asyncActions/activeTests';
import styles from "../../styles/testConstructor.module.css"
import ButtonElement from './../UI/ButtonElement';
import TitleElement from './../UI/TitleElement';
import LoadingElement from './../UI/LoadingElement';
import MessageElement from './../UI/MessageElement';
import MyTestActivationTime from './MyTestActivationTime';

const MyTestItems = ({ test, userId }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activeTests = useSelector(state => state.activeTests)
    
    useEffect(() => {
        dispatch(fetchActiveTests())
    }, [])

    const startTesting = (time) => {
        fetch("http://localhost:5000/tests/activateTest", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: test._id,
                ms: time
            })
        }).then(res => console.log(res.json()))
            .then(() => dispatch(fetchUserTests(userId)))
            .then(() => dispatch(fetchActiveTests()))
            .then(() => navigate("/activeTests"))
    }

    const deleteTest = () => {
        fetch("http://localhost:5000/tests/test", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}`
            },
            body: JSON.stringify({
                testId: test._id,
                userId: "62348785b7a3e33fe3a80ad6"
            })
        })
            .then(res => console.log(res.json()
                .then(() => dispatch(fetchUserTests(userId))
                ).finally(() => navigate("/myTests")
                ))
            )
    }

    const isActive = () => {
        const a = activeTests.tests.filter(item => test._id === item.myTestId)
        if (a.length > 0) return true
        return false
    }

    const ComponentIsLoaded = () => {
        return (
            <div>
                <div className={styles.testRow}>
                    <div className={styles.testInfo}>
                        <TitleElement text={test.name} />
                        <TitleElement text={test.description} addedClass="secondTitle" />
                    </div>

                    <div className={styles.testManipulation}>
                        <ButtonElement disabled={isActive()} onClick={() => navigate(`/editTest/${test._id}`)} text="Редагувати тест" />
                        <ButtonElement disabled={isActive()} onClick={deleteTest} text="Видалити тест" />
                    </div>
                </div>
                <div>{test.testItems.map(testItem => <MyTestItem testItem={testItem} key={testItem._id} />)}</div>
                <MyTestActivationTime isActive={isActive} startTesting={startTesting} />
                {isActive() && <MessageElement type="warning" message="Закінчіть тестування щоб отримати доступ до дій з тестом." />}
            </div>
        )
    }

    return (
        activeTests.isLoading ?
            <LoadingElement />
            : <ComponentIsLoaded />
    )
}

export default MyTestItems