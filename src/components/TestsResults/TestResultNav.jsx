import React from 'react'
import TestResultNavLink from './TestResultNavLink';
import styles from "../../styles/content.module.css"
import { Link } from 'react-router-dom';

const TestResultNav = ({ myTests }) => {

    const NoTestResults = () => {
        return (
            <div className={styles.message}>
                У вас немає результатів тестів! Активуйте <Link to="/newTest">один з тестів</Link> та поширте його код або QR-код.
            </div>
        )
    }

    return (
        <div>
            {myTests.length === 0
                ? <NoTestResults />
                : <div className={styles.linksRow}>
                    {myTests.map(test => <TestResultNavLink test={test} key={test._id} />)}
                </div>
            }
        </div>
    )
}

export default TestResultNav