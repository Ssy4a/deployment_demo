import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ({ className, linkClassName }) => {

    return (
        <div className={className}>
            <Link name="link" onClick={()=>console.log("cock")} className={linkClassName} to="/takeATest">Пройти тест</Link>
            <Link name="link" className={linkClassName} to="/testsResults">Результати тестів</Link>
            <Link name="link" className={linkClassName} to="/newTest">Новий тест</Link>
            <Link name="link" className={linkClassName} to="/myTests">Мої тесты</Link>
            <Link name="link" className={linkClassName} to="/activeTests">Активні тести</Link>
            <Link name="link" className={linkClassName} to="/account">Аккаунт</Link>
        </div>
    )
}

export default Navigation