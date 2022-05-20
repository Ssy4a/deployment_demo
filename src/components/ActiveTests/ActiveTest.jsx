import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getDate } from './../../functions/getUkrMonth';
import { useState } from 'react';
import TimerElement from '../UI/TimerElement';
import QRCode from "qrcode";
import { useEffect } from 'react';
import { fetchActiveTests } from './../../asyncActions/activeTests';
import { useDispatch } from 'react-redux';
import MessageElement from './../UI/MessageElement';
import styles from "./../../styles/content.module.css"
import ButtonElement from './../UI/ButtonElement';
import { UrlAPI, UrlApp } from './../../constants';

const ActiveTest = ({ test }) => {

    const activatedAtDate = new Date(test.activatedAt)
    const [error, setError] = useState()
    const [src, setSrc] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const finishTesting = () => {
        fetch(`${UrlAPI}/tests/activeTest/${test._id}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}` },
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
                console.log(res)
            })
            .catch(err => setError(err.message))
            .finally(() => dispatch(fetchActiveTests()))
    }

    useEffect(() => {
        QRCode.toDataURL(`${UrlApp}/takeATest/${test._id}`).then((link) => {
            setSrc(link)
        })
    }, [])

    return (
        <div className={`${styles.link} ${styles.activeTests}`}>
            <div><b>Назва:</b> {test.name}</div>
            <div><b>Опис:</b> {test.description}</div>
            <div><b>Ідентифікатор:</b> {test._id}</div>
            <div><b>Час активації:</b> {getDate(activatedAtDate)}</div>
            <div><b>Залишилось часу:</b> <TimerElement test={test} /> </div>
            <div className={styles.qrCode}>
                <b>Відскануйте QR-код для проходження тесту:</b>
                <img alt='QR код для проходження тесту' src={src}></img>
            </div>
            <ButtonElement onClick={finishTesting} addedClass="finishTest" text="Закінчити тестування" />
            <ButtonElement addedClass="finishTest" text="Переглянути тест" onClick={() => navigate("/myTests/" + test.myTestId)} />
            {error && <MessageElement type="error" message={error} />}
        </div >
    )
}

export default ActiveTest