import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = ({ className, linkClassName, activeLinkClassName }) => {

    return (
        <div className={className}>

            <NavLink name="link" className={({ isActive }) => linkClassName + (isActive ? ` ${activeLinkClassName}` : "")} to="/takeATest">Пройти тест</NavLink>
            <NavLink name="link" className={({ isActive }) => linkClassName + (isActive ? ` ${activeLinkClassName}` : "")} to="/testsResults">Результати тестів</NavLink>
            <NavLink name="link" className={({ isActive }) => linkClassName + (isActive ? ` ${activeLinkClassName}` : "")} to="/newTest">Новий тест</NavLink>
            <NavLink name="link" className={({ isActive }) => linkClassName + (isActive ? ` ${activeLinkClassName}` : "")} to="/myTests">Мої тесты</NavLink>
            <NavLink name="link" className={({ isActive }) => linkClassName + (isActive ? ` ${activeLinkClassName}` : "")} to="/activeTests">Активні тести</NavLink>
            <NavLink name="link" className={({ isActive }) => linkClassName + (isActive ? ` ${activeLinkClassName}` : "")} to="/account">Аккаунт</NavLink>
        </div>
    )
}

export default Navigation