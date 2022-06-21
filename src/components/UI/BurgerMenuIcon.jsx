import React, { useContext, useRef } from 'react';
import { MenuContext } from './../../context/menuContext';
import styles from "../../styles/header.module.css"

const BurgerMenuButton = () => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    const buttonRef = useRef()

    const onBurgerMenuButtonClick = (e) => {
        toggleMenuMode()
    }

    const Line = () => {
        return (
            <span name='button' className={styles.burgerMenuLine}></span>
        )
    }

    const burgerMenuButtonStyles = () => {
        if (isMenuOpen) return `${styles.active} ${styles.burgerMenuButton}`
        return styles.burgerMenuButton
    }

    return (
        <div className={burgerMenuButtonStyles()}>
            <button name='button' ref={buttonRef}
                aria-label="Открыть главное меню"
                onClickCapture={e => onBurgerMenuButtonClick(e)}
            >
                <Line />
                <Line />
                <Line />
            </button>
        </div>
    );
};

export default BurgerMenuButton;