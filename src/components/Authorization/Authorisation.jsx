import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MessageElement from '../UI/MessageElement';
import styles from "../../styles/authorization.module.css";
import TitleElement from './../UI/TitleElement';

const Authorisation = () => {

    const [error, setError] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/")
    }, [])

    const onSubmit = (data) => {
        fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
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
                localStorage.setItem("JWTAccessToken", res.token)
                localStorage.setItem("userId", res.userId)
                dispatch({ type: "SET_AUTHORIZED_CHECK", payload: true })
            })
            .catch(err => setError(err.message))
    }

    return (
        <div className={styles.authorizationWrapper}>
            <form className={styles.authorizationFont} onSubmit={handleSubmit(onSubmit)}>
                <TitleElement text="Увійдіть в аккаунт" />

                <div className={styles.authorizationInput}>
                    <input type="text" required autocomplete="off"
                        {...register('username', {
                            required: "Обов`язкове поле",
                            minLength: { value: 5, message: "Мінімальна довжина логіну - 5 символів" }
                        })} />
                    <label>Логін</label>
                    {errors.username && <p>{errors.username.message}</p>}
                </div>

                <div className={styles.authorizationInput}>
                    <input className={styles.authorizationInput} type="password" required autocomplete="off"
                        {...register('password', {
                            required: "Обов`язкове поле",
                            minLength: { value: 8, message: "Мінімальна довжина паролю - 8 символів" }
                        })} />
                    {errors.password && <p>{errors.password.message}</p>}
                    <label>Пароль</label>
                </div>

                <input className={styles.submitButton} type="submit" value={"Увійти"} />
                {error && <MessageElement type="error" message={error} />}

                <div className={styles.message}>Ще не зареєстровані? <Link className={styles.link} to="/registration">зареєструватися</Link> </div>
            </form>
        </div>
    )
}

export default Authorisation