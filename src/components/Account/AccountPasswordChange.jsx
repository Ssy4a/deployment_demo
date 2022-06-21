import React from 'react'
import styles from "../../styles/authorization.module.css";
import { UrlAPI } from './../../constants';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

const AccountPasswordChange = ({ setLoading, setError, setSuccess }) => {

    const onSubmit = (data) => {
        console.log(data)
        fetch(`${UrlAPI}/auth/password`, {
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
                setError(null)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => setLoading(false))
    }

    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const password = useRef()
    password.current = watch("password", "")

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br />
            <div className={`${styles.authorizationInput} ${styles.changeInfo}`}>
                <input type="password" required
                    {...register('password_old', {
                        required: "Обов'язкове поле",
                        minLength: { value: 8, message: "Мінімальна довжина паролю - 8 символів" }
                    })} />
                <label>Старий пароль</label>
                {errors.password_old && <p>{errors.password_old.message}</p>}
            </div>

            <div className={`${styles.authorizationInput} ${styles.changeInfo}`}>
                <input type="password" required
                    {...register('password', {
                        required: "Обов'язкове поле",
                        minLength: { value: 8, message: "Мінімальна довжина паролю - 8 символів" }
                    })} />
                <label>Новий пароль</label>
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <div className={`${styles.authorizationInput} ${styles.changeInfo}`}>
                <input type="password" required
                    {...register('password_repeat', ({
                        validate: value => value === password.current || "Паролі не збігаються"
                    }))} />
                <label>Повторіть пароль</label>
                {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
            </div>
            <input className={styles.submitButton} type="submit" value={"Змінити пароль"} />
        </form>
    )
}

export default AccountPasswordChange