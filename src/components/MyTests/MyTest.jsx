import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../styles/content.module.css"
import { useState } from 'react';
import { getDate } from './../../functions/getUkrMonth';
import TitleElement from './../UI/TitleElement';
import { useSelector } from 'react-redux';
import TimerElement from './../UI/TimerElement';
import LoadingElement from './../UI/LoadingElement';

const MyTest = ({ myTests }) => {

    const activeTests = useSelector(state => state.activeTests)
    console.log(activeTests)
    const [testIsOpen, setTestIsOpen] = useState(false)
    const rowToDate = (date) => {
        const updatedAt = new Date(date)
        return getDate(updatedAt)
    }

    const MyTestLink = ({ test, id }) => {

        const isActive = () => {
            const activeArr = activeTests.tests.filter(item => myTests.myTests[id]._id === item.myTestId)
            if (activeArr.length > 0) return activeArr[0]
            return false
        }

        return (
            <Link className={`${styles.link} ${styles.myTestLink}`} to={test._id} onClick={() => setTestIsOpen(!testIsOpen)}>
                <div><b>Назва:</b> {test.name}</div>
                <div><b>Опис:</b> {test.description}</div>
                <div><b>Дата оновлення:</b> {rowToDate(test.updatedAt)}</div>
                <div className={isActive() ? styles.activeCircle : `${styles.activeCircle} ${styles.inactiveCircle}`}></div>
                <div className={styles.timeLeft}>
                    {isActive()
                        ? <TimerElement test={isActive()} />
                        : <div>Тест не активний</div>}
                </div>
            </Link>
        )
    }

    return (
        <div>
            <TitleElement text="Ваші тести:" />
            {activeTests.isLoading
                ? <LoadingElement />
                : <div className={styles.linksRow}>
                    {myTests.myTests.map((test, id) => <MyTestLink test={test} id={id} />)}
                </div>
            }
        </div>
    )
}

export default MyTest