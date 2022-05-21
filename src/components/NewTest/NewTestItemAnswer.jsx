import React from 'react'
import { useDispatch } from 'react-redux';
import InputElement from '../UI/InputElement';
import styles from "../../styles/testConstructor.module.css"

const NewTestItemAnswer = ({ answer, answerId, testItemId }) => {

    const dispatch = useDispatch()
    const deleteAnswer = () => { dispatch({ type: "DELETE_ANSWER", payload: { answerId, testItemId } }) }
    const onAnswerChange = (answer) => { dispatch({ type: "ON_ANSWER_CHANGE", payload: { answerId, testItemId, answer } }) }
    const onCheckboxChange = () => { dispatch({ type: "ON_CHECKBOX_CHANGE", payload: { answerId, testItemId } }) }

    return (
        <div className={styles.answerRow}>
            <input type="checkbox" checked={answer.isRight} className={styles.checkbox}
                onChange={onCheckboxChange}></input>
            <InputElement isAnswer={true} addedClass="answerInput" onChange={event => onAnswerChange(event.target.value)}
                value={answer.answer} placeholder="Варіант відповіді" />
            <button onClick={deleteAnswer} className={styles.deleteAnswerButton}></button>
        </div>
    )
}

export default NewTestItemAnswer