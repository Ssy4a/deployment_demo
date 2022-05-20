import React from 'react'
import HomePage from '../components/Pages/HomePage';
import ErrorPage from '../components/Pages/ErrorPage';
import TakeATest from "../components/TakeATest/TakeATest";
import ActiveTests from "../components/ActiveTests/ActiveTests";
import TestsResultsRoutes from "../components/TestsResults/TestsResultRoutes";
import Account from "../components/Account/Account";
import Header from "../components/Header/Header";
import MyTests from "../components/MyTests/MyTests";
import NewTest from '../components/NewTest/NewTest';
import EditTest from '../components/EditTest/EditTest';
import NavState from "../context/menuContext";
import styles from "../styles/app.module.css";
import { Route, Routes } from 'react-router-dom';

const AppAuthorized = () => {
    return (
        <div>
            <NavState>
                <Header />
            </NavState>
            <div className="container">
                <div className={styles.content}>
                    <Routes>
                        <Route path="*" element={< ErrorPage />} />
                        <Route path="/" element={< HomePage />} />
                        <Route path="/takeATest/*" element={< TakeATest />} />
                        <Route path="/newTest" element={< NewTest />} />
                        <Route path="/myTests/*" element={< MyTests />} />
                        <Route path="/editTest/:testToEditId" element={< EditTest />} />
                        <Route path="/activeTests" element={< ActiveTests />} />
                        <Route path="/account" element={< Account />} />
                        <Route path="/testsResults/*" element={< TestsResultsRoutes />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AppAuthorized