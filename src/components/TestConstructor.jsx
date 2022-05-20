import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NewTestItem from './NewTest/NewTestItem';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserTests } from '../asyncActions/userTests';
import styles from "../styles/testConstructor.module.css"
import InputElement from './UI/InputElement';
import ButtonElement from './UI/ButtonElement';
import MessageElement from './UI/MessageElement';
import { UrlAPI } from './../constants';

const TestConstructor = ({ testToEditId }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const newTest = useSelector(state => state.testConstructor)
    const [validationError, setValidationError] = useState(null)
    const [error, setError] = useState(null)

    const passEditingTestData = (testToEdit) => { dispatch({ type: "PASS_EDITING_TEST_DATA", payload: testToEdit }) }
    const addNewTestItem = () => { dispatch({ type: "ADD_NEW_TESTITEM" }) }
    const onDescriptionChange = (description) => { dispatch({ type: "ON_DESCRIPTION_CHANGE", payload: description }) }
    const onNameChange = (name) => { dispatch({ type: "ON_NAME_CHANGE", payload: name }) }

    useEffect(() => {
        if (testToEditId) {
            fetch(`${UrlAPI}/tests/test/${testToEditId}`)
                .then(res => res.json())
                .then(json => passEditingTestData(json))
        }
    }, [])

    async function submitTest() {
        if (testToEditId) {
            fetch(`${UrlAPI}/tests/test`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}`
                },
                body: JSON.stringify({
                    newTest,
                    testToEditId,
                })
            })
                .then(res => {
                    if (res.ok) {
                        dispatch({ type: "RESET_TEST" })
                    }
                    else return res.json().then(function (object) {
                        throw Error(object.message)
                    })
                })
                .then(() => dispatch(fetchUserTests(localStorage.getItem("userId"))))
                .catch(err => setError(err))
        }
        else {
            fetch(`${UrlAPI}/tests/test`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}`
                },
                body: JSON.stringify(newTest)
            })
                .then(res => {
                    if (res.ok) {
                        dispatch({ type: "RESET_TEST" })
                    }
                    else return res.json().then(function (object) {
                        throw Error(object.message)
                    })
                })
                .then(() => dispatch(fetchUserTests(localStorage.getItem("userId"))))
                .catch(err => setError(err))
        }
        navigate("/myTests")
    }

    return (
        <div className={styles.test}>
            <div className={styles.testConstructor}>
                <div className={styles.form}>
                    <InputElement value={newTest.name} onChange={e => onNameChange(e.target.value)} placeholder="Назва тесту" />
                    <InputElement value={newTest.description} onChange={e => onDescriptionChange(e.target.value)} placeholder="Опис тесту" />
                    <div className={styles.testItems}>
                        {
                            newTest.testItems.map((testItem, testItemId) =>
                                <NewTestItem testItem={testItem} testItemId={testItemId}
                                    key={testItemId} setValidationError={setValidationError}
                                />)
                        }
                    </div>
                    <div className={styles.newQuestionButtonContainer}>
                        <ButtonElement onClick={addNewTestItem} text="Додати нове запитання" addedClass="newQuestion" />
                    </div>
                    <ButtonElement disabled={validationError} addedClass="saveTest" onClick={submitTest} text="Зберегти тест" />
                    {validationError && <MessageElement addedClass="testConstructorMessage" type="warning" message={validationError} />}
                    {error && <MessageElement addedClass="testConstructorMessage" type="error" message={error} />}
                </div>
            </div>
        </div>
    )
}

export default TestConstructor