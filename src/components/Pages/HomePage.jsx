import React from 'react'
import styles from "../../styles/content.module.css"
import { Link } from 'react-router-dom';
import TitleElement from './../UI/TitleElement';

const HomePage = () => {
  return (
    <>
      <TitleElement text="Для учнів:" addedClass="homeTitle" />
      <div className={`${styles.contentFont} ${styles.homePage}`}>
        <span>Для проходження тесту, відскануйте поширений викладачем QR-код,
          або введіть його ідентифікатор на сторінці <Link className={styles.homeLink} to="/takeATest">пошуку тесту</Link>.</span>
      </div>
      <br />
      <TitleElement text="Для вчителів:" addedClass="homeTitle" />
      <div className={`${styles.contentFont} ${styles.homePage}`}>
        <span>Для створення тесту, скористайтеся <Link className={styles.homeLink} to="/newTest">формою нового тесту</Link>.</span>
        <span>
          Для початку тестування, активуйте тест на сторінці <Link className={styles.homeLink} to="/myTests">"мої тести"</Link>.
          Також використовуйте її для перегляду та дій з тестами.
        </span>
        <span>Для перегляду активних тестів, перейдіть на сторінку <Link className={styles.homeLink} to="/activeTests">"активні тести"</Link>.</span>
        <span>Для перегляду результатів тестів, перейдіть на сторінку <Link className={styles.homeLink} to="/activeTests">"результати тестів"</Link>.</span>
        <span>Зміна даних облікового запису та вихід з нього доступні на сторінці <Link className={styles.homeLink} to="/activeTests">"аккаунт"</Link>.</span>
      </div>
    </>
  )
}

export default HomePage