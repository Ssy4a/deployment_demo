import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../styles/content.module.css"
import { getDate } from './../../functions/getUkrMonth';

const TestResultNavLink = ({ test }) => {

    const rowToDate = (date) => {
        const updatedAt = new Date(date)
        return getDate(updatedAt)
    }

    return (
        <Link className={styles.link} to={test._id}>
            <div><b>Назва:</b> {test.name}</div>
            <div><b>Опис:</b> {test.description}</div>
            <div><b>Дата оновлення:</b> {rowToDate(test.updatedAt)}</div>
        </Link>
    )
}

export default TestResultNavLink