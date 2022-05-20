import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TakeATestForm from './TakeATestForm';
import TakeATestSearch from './TakeATestSearch';
import styles from "./../../styles/content.module.css"

const TakeATest = () => {

    return (
        <div className={styles.contentFont}>
            <Routes>
                <Route path="/:activeTestId" element={<TakeATestForm />} />
                <Route path='/' element={<TakeATestSearch/>}/>
            </Routes>
        </div>
    )
}

export default TakeATest