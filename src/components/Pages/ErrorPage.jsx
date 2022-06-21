import React from 'react'
import ButtonElement from './../UI/ButtonElement';
import { useNavigate } from 'react-router-dom';
import styles from "../../styles/content.module.css"

const ErrorPage = ({ notExistingItemName, backButtonText, addedClass }) => {

  const navigate = useNavigate()

  console.log(notExistingItemName)

  return (
    <div className={`${styles.errorPage} ${styles[addedClass]}`}>
      <span>Помилка 404</span>
      <span>Нажаль, {notExistingItemName} з таким посиланням не існує :( </span>
      <span>Перевірте правильність введеного посилання та спробуйте ще. </span>
      <ButtonElement addedClass="errorButton" onClick={() => navigate("")} text={backButtonText} />
    </div>
  )
}

export default ErrorPage