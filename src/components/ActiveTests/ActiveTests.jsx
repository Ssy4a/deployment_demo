import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingElement from '../UI/LoadingElement';
import ActiveTest from './ActiveTest';
import { fetchActiveTests } from './../../asyncActions/activeTests';
import { useSelector, useDispatch } from 'react-redux';
import MessageElement from './../UI/MessageElement';
import styles from "./../../styles/content.module.css"
import TitleElement from './../UI/TitleElement';

const ActiveTests = () => {

    const activeTests = useSelector(state => state.activeTests)
    const dispatch = useDispatch()
    console.log(activeTests)

    useEffect(() => {
        dispatch(fetchActiveTests())
    }, [])

    const NoActiveTests = () => {
        return (
            <div className={styles.message}>
                У вас немає аткивних тестів. Щоб почати тестування, активуйте один з <Link to="/myTests">ваших тестів</Link>.
            </div>
        )
    }

    const ActiveTestSuccess = () => {
        return (
            <div>
                {activeTests.tests.length === 0
                    ? <NoActiveTests />
                    : <div>
                        <div className={styles.linksRow}>
                            {activeTests.tests.map(test => <ActiveTest test={test} key={test._id} />)}
                        </div>
                    </div>
                }
            </div>
        )
    }

    return (
        <div className={styles.contentFont}>
            <TitleElement text="Активні тести:" />
            {activeTests.isLoading
                ? <LoadingElement />
                : <ActiveTestSuccess />
            }
            {activeTests.error && <MessageElement type="error" message={activeTests.error} />}
        </div>
    )
}

export default ActiveTests