import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MessageElement from './../UI/MessageElement';
import ButtonElement from './../UI/ButtonElement';
import InputElement from './../UI/InputElement';
import styles from "./../../styles/content.module.css"
import TitleElement from './../UI/TitleElement';

const TakeATestSearch = () => {
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [activeTestIdValue, setActiveTestIdValue] = useState(null)

    const startTesting = () => {
        fetch(`http://localhost:5000/tests/activeTest/${activeTestIdValue}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}`
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                else return res.json().then(function (object) {
                    throw Error(object.message)
                })
            })
            .then(res => {
                navigate(res._id)
            })
            .catch(err => setError(err.message))
    }

    const onTestSearchInputChange = (value) => {
        setActiveTestIdValue(value)
    }

    return (
        <div>
            <TitleElement text="Щоб пройти тест, введіть його ідентифікатор." />
            <div className={styles.searchTestRow}>
                <InputElement placeholder='Ідентифікатор' onChange={event => onTestSearchInputChange(event.target.value)}
                    addedClass="testSearchInput" />
                <ButtonElement disabled={!activeTestIdValue} onClick={startTesting} text="Почати тестування" />
            </div>
            {!activeTestIdValue && <MessageElement type="warning" message={"Введіть ідентифікатор тесту."} />}
            {error && <MessageElement type="error" message={error} />}
        </div>
    )
}

export default TakeATestSearch