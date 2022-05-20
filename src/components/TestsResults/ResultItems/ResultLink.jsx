import React from 'react'
import { Link } from 'react-router-dom';
import { getDate } from '../../../functions/getUkrMonth';
import styles from "../../../styles/content.module.css"
import { getRating } from './../../../functions/getRating';

const ResultLink = ({ result }) => {
    const passedAtDate = new Date(result.passedAt)

    return (
        <Link className={styles.link} to={result._id}>
            <div><b>Пройшов:</b> {result.username}</div>
            <div><b>Час проходження:</b> {getDate(passedAtDate)}</div>
            <div><b>Оцінка:</b> {getRating(result)}</div>
        </Link>
    )
}

export default ResultLink