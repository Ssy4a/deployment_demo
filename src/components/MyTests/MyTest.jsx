import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../styles/content.module.css"
import { useState } from 'react';
import { getDate } from './../../functions/getUkrMonth';
import TitleElement from './../UI/TitleElement';

const MyTest = ({ myTests, userId }) => {

    const [testIsOpen, setTestIsOpen] = useState(false)
    const rowToDate = (date) => {
        const updatedAt = new Date(date)
        return getDate(updatedAt)
    }

    return (
        <div>
            <TitleElement text="Ваші тести:" />
            <div className={styles.linksRow}>
                {myTests.myTests.map(test =>
                    <Link className={styles.link} to={test._id} onClick={() => setTestIsOpen(!testIsOpen)}>
                        <div><b>Назва:</b> {test.name}</div>
                        <div><b>Опис:</b> {test.description}</div>
                        <div><b>Дата оновлення:</b> {rowToDate(test.updatedAt)}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default MyTest