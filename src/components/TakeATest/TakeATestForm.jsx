import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import LoadingElement from './../UI/LoadingElement';
import TakeATestItem from './TakeATestItem';
import MessageElement from './../UI/MessageElement';
import TitleElement from './../UI/TitleElement';
import ButtonElement from '../UI/ButtonElement';

const TakeATestForm = () => {

    let { activeTestId } = useParams()
    const [error, setError] = useState(null)
    const [test, setTest] = useState(null)
    const [isRightArr, setIsRightArr] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let cleanupFunction = false
        fetch(`http://localhost:5000/tests/activeTest/${activeTestId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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
            .then(res => {
                if (!cleanupFunction)
                    setTest(res)
            })
            .catch(err => setError(err.message))
        return () => {
            cleanupFunction = true
        }
    }, [])

    useEffect(() => {
        if (test) {
            setIsRightArr(test.testItems.map(item => {
                return item.answers.map(item => false)
            }))
        }
    }, [test])

    const submitHandler = () => {
        console.log(isRightArr)
        fetch("http://localhost:5000/tests/testResult", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}`
            },
            body: JSON.stringify({
                answers: isRightArr,
                activeTestId
            })
        })
            .then(res => {
                if (res.ok) {
                    console.log(res)
                }
                else return res.json().then(function (object) {
                    throw Error(object.message)
                })
            })
            .catch(err => setError(err.message))
            .finally(navigate("/"))
    }

    if (test) return (
        <div>
            <TitleElement text={test.name} />
            <TitleElement text={test.description} addedClass="secondTitle" />
            <div>{test.testItems.map((item, id) =>
                <TakeATestItem testItem={item} key={item._id} testItemId={id} isRightArr={isRightArr} setIsRightArr={setIsRightArr} />)}</div>
            <ButtonElement onClick={submitHandler} addedClass="saveTest" text="Відправити" />
            {error && <MessageElement type="error" message={error} />}
        </div>
    )
    return <LoadingElement />
}

export default TakeATestForm