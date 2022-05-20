import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../styles/header.module.css"

const Navigation = ({ className, linkClassName }) => {

    return (
        <div className={className}>
            <Link onClick={()=>console.log("cock")} className={linkClassName} to="/takeATest">Пройти тест</Link>
            <Link className={linkClassName} to="/testsResults">Результати тестів</Link>
            <Link className={linkClassName} to="/newTest">Новий тест</Link>
            <Link className={linkClassName} to="/myTests">Мої тесты</Link>
            <Link className={linkClassName} to="/activeTests">Активні тести</Link>
            <Link className={linkClassName} to="/account">Аккаунт</Link>
        </div>
    )
}

export default Navigation