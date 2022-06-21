import React from 'react'
import { useForm } from 'react-hook-form';
import { UrlAPI } from './../../constants';
import { useState, useRef } from 'react';
import TitleElement from './../UI/TitleElement';
import styles from "../../styles/authorization.module.css";
import MessageElement from './../UI/MessageElement';
import LoadingElement from './../UI/LoadingElement';
import AccountPasswordChange from './AccountPasswordChange';


const AccountChangeForm = ({ userInformation, setUserInformation }) => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const [error, setError] = useState(null)
    const [changedInfo, setChangedInfo] = useState(userInformation)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const onSubmit = (data) => {
        fetch(`${UrlAPI}/auth/userInfo`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("JWTAccessToken")}` },
            body: JSON.stringify(data)
        })
            .then(res => {
                setLoading(true)
                setSuccess(false)
                if (res.ok) return res.json()
                else return res.json().then(function (object) {
                    throw Error(object.message)
                })
            })
            .then(json => {
                setSuccess(true)
                setUserInformation(json)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => setLoading(false))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TitleElement addedClass="changeAccountTitle" text="Налаштування аккаунту" />
                <div className={`${styles.authorizationInput} ${styles.changeInfo}`}>
                    <input type="text" required autocomplete="off" value={changedInfo.username}
                        {...register('username', {
                            required: "Обов'язкове поле",
                            minLength: { value: 5, message: "Мінімальна довжина логіну - 5 символів" }
                        })}
                        onChange={(e) => setChangedInfo({ ...changedInfo, username: e.target.value })}
                    />

                    <label>Логін</label>
                    {errors.username && <p>{errors.username.message}</p>}
                </div>

                <div className={`${styles.authorizationInput} ${styles.changeInfo}`}>
                    <input type="text" required autocomplete="off" value={changedInfo.name}
                        {...register('name', {
                            required: "Обов'язкове поле",
                            minLength: { value: 4, message: "Мінімальна довжина нікнейму - 4 символів" }
                        })}
                        onChange={(e) => setChangedInfo({ ...changedInfo, name: e.target.value })}
                    />
                    <label>Ім'я</label>
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <input className={styles.submitButton} type="submit" value={"Змінити інформацію"} />
            </form>
            <AccountPasswordChange setLoading={setLoading} setSuccess={setSuccess} setError={setError} />
            {error && <MessageElement type="error" message={error} />}
            <div className={styles.loadingRow}>
                {loading && <LoadingElement addedClass="blackLoading" />}
                {success && <div className={styles.successLoading}></div>}
            </div>
        </>
    )
}

export default AccountChangeForm