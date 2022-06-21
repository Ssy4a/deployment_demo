import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MessageElement from '../UI/MessageElement';
import styles from "../../styles/content.module.css"
import TitleElement from './../UI/TitleElement';
import LoadingElement from './../UI/LoadingElement';
import { UrlAPI } from './../../constants';
import ModalElement from './../UI/ModalElement';
import AccountChangeForm from './AccountChangeForm';

const Account = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userInformation, setUserInformation] = useState(null)
    const [error, setError] = useState(null)
    const [modalActive, setModalActive] = useState(false)

    const logOut = () => {
        localStorage.removeItem("JWTAccessToken")
        localStorage.removeItem("userId")
        dispatch({ type: "SET_AUTHORIZED_CHECK", payload: false })
        navigate("/")
    }

    useEffect(() => {
        fetch(`${UrlAPI}/auth/userInfo`, {
            headers: {
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
            .then(json => setUserInformation(json))
            .catch(err => setError(err))
    }, [])

    if (userInformation) {
        return (
            <>
                <TitleElement text="Аккаунт" addedClass="homeTitle" />
                <div className={`${styles.contentFont} ${styles.account}`}>
                    <TitleElement text={`Логін : ${userInformation.username}`} addedClass="secondTitle" />
                    <TitleElement text={`Ім'я : ${userInformation.name}`} addedClass="secondTitle" />
                    <button onClick={() => setModalActive(true)} className={styles.editQuestionButton} text="Редагувати аккаунт" />
                    <button onClick={logOut} className={styles.logOutButton} text="Вихід" />
                    <ModalElement modalActive={modalActive} setModalActive={setModalActive}>
                        <AccountChangeForm userInformation={userInformation} setUserInformation={setUserInformation} />
                    </ModalElement>
                </div>
            </>
        )
    }
    else if (error) return <MessageElement type="error" message={error} />
    else return <LoadingElement />
}

export default Account