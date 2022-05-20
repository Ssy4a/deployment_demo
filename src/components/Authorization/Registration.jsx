import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import MessageElement from '../UI/MessageElement';
import { Link } from 'react-router-dom';
import styles from "../../styles/authorization.module.css";
import TitleElement from '../UI/TitleElement';

const Registration = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const [errorMessage, setErrorMessage] = useState(null)
  const [message, setMessage] = useState(null)
  const password = useRef()
  password.current = watch("password", "")

  const onSubmit = (data) => {
    fetch("http://localhost:5000/auth/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) return res.json()
        else return res.json().then(function (object) {
          throw Error(object.message)
        })
      })
      .then(json => {
        setMessage(json.message)
        setErrorMessage(null)
      })
      .catch(err => {
        setErrorMessage(err.message)
        setMessage(null)
      })
  }

  return (
    <div className={styles.authorizationWrapper}>

      <form className={styles.authorizationFont} onSubmit={handleSubmit(onSubmit)}>
        <TitleElement text="Форма реєстрації" />
        <div className={styles.authorizationInput}>
          <input type="text" required  autocomplete="off"
            {...register('username', {
              required: "Обов`язкове поле",
              minLength: { value: 5, message: "Мінімальна довжина логіну - 5 символів" }
            })} />
          <label>Логін</label>
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div className={styles.authorizationInput}>
          <input type="text" required  autocomplete="off"
            {...register('name', {
              required: "Обов`язкове поле",
              minLength: { value: 4, message: "Мінімальна довжина нікнейму - 4 символів" }
            })} />
          <label>Ім'я</label>
          <span className={styles.message}>*Власнику теста буде доступно ваше ім`я </span>
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <br/>

        <div className={styles.authorizationInput}>
          <input type="password" required 
            {...register('password', {
              required: "Обов`язкове поле",
              minLength: { value: 8, message: "Мінімальна довжина паролю - 8 символів" }
            })} />
          <label>Пароль</label>
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className={styles.authorizationInput}>
          <input type="password" required  
            {...register('password_repeat', ({
              validate: value => value === password.current || "Паролі не збігаються"
            }))} />
          <label>Повторіть пароль</label>
          {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        </div>

        <input className={styles.submitButton} type="submit" value={"Зареєструватися"} />
        {errorMessage && <MessageElement type="error" message={errorMessage} />}
        {message && <MessageElement message={message} />}
        <div className={styles.message}>Є аккаунт? <Link className={styles.link} to="/">Увійти</Link> </div>
      </form>
    </div>
  )
}

export default Registration