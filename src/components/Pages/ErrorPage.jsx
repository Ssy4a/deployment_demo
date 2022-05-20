import React from 'react'
import ButtonElement from './../UI/ButtonElement';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/content.module.css"

const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.contentFont}>
      <div className={styles.errorPage}>
        <span>Помилка 404</span>
        <span>Нажаль, сторінки з таким посиланням не існує :( </span>
        <span>Перевірте правильність введеного посилання та спробуйте ще. </span>
        <ButtonElement addedClass="errorButton" onClick={() => navigate("")} text="Домашня сторінка" />
      </div>
    </div>
  )
}

export default ErrorPage