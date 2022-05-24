import React, { useEffect } from 'react'
import NewTestItemAnswer from './NewTestItemAnswer'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from "../../styles/testConstructor.module.css"
import TextAreaElement from '../UI/TextAreaElement';
import InputElement from './../UI/InputElement';


const NewTestItem = ({ testItem, testItemId, setValidationError, oneTestItem }) => {

    const dispatch = useDispatch()
    const newTest = useSelector(state => state.testConstructor)

    const addNewAnswer = () => {
        dispatch({ type: "ADD_NEW_ANSWER", payload: testItemId })
    }

    const deleteTestItem = () => { dispatch({ type: "DELETE_TEST_ITEM", payload: testItemId }) }
    const onQuestionChange = (targetValue) => { dispatch({ type: "ON_QUESTION_CHANGE", payload: { targetValue, testItemId } }) }
    const oneTestItemAnswer = () => {
        if (testItem.answers.length === 1) return true
        return false
    }

    useEffect(() => {
        const testItemsInvalidCheck = (item) => {
            return item.question.length === 0
        }
        const testAnswersInvalidCheck = (item) => {
            return item.answer.length === 0
        }
        if (testItem.answers.some(testAnswersInvalidCheck) || newTest.name.length === 0 || newTest.description.length === 0 || newTest.testItems.some(testItemsInvalidCheck)) {
            setValidationError("Заповніть усі поля.")
        }
        else {
            setValidationError("")
        }
    }, [newTest])

    return (
        <div className={styles.testItem}>
            <button disabled={oneTestItem()} onClick={deleteTestItem} className={styles.deleteQuestionButton}></button>

            <TextAreaElement onChange={event => onQuestionChange(event.target.value, testItemId)}
                value={testItem.question} placeholder="Запитання" />

            {testItem.answers.map((answer, answerId) => <NewTestItemAnswer
                answer={answer} testItemId={testItemId} answerId={answerId}
                key={answerId} oneTestItemAnswer = {oneTestItemAnswer} />)}
            <InputElement onFocus={addNewAnswer} addedClass="newAnswerInput"
                placeholder="Додати новий варіант відповіді" />
        </div>
    )
}

export default NewTestItem