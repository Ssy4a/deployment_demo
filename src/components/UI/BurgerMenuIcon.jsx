import React, { useContext } from 'react';
import { MenuContext } from './../../context/menuContext';
import styles from "../../styles/header.module.css"

const BurgerMenuButton = () => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const onBurgerMenuButtonClick = () => {
        console.log("burgir")
        toggleMenuMode();
    };

    const Line = () => {
        return (
            <span className={styles.burgerMenuLine}></span>
        )
    }

    const burgerMenuButtonStyles = () => {
        if (isMenuOpen) return `${styles.active} ${styles.burgerMenuButton}`
        return styles.burgerMenuButton
    }

    return (
        <div className={burgerMenuButtonStyles()}>
            <button
                aria-label="Открыть главное меню"
                onClick={onBurgerMenuButtonClick}
            >
                <Line />
                <Line />
                <Line />
            </button>
        </div>
    );
};

export default BurgerMenuButton;