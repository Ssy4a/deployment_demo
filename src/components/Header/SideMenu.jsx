import React, { useContext, useRef } from 'react';
import styles from "../../styles/header.module.css"
import { MenuContext } from '../../context/menuContext';
import Navigation from './Navigation';
import { useEffect } from 'react';

export const SideMenu = () => {

    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const useOnClickOutside = (ref, handler) => {
        useEffect(() => {
            const listener = event => {
                event.stopPropagation()
                if (event.target.name === "button") {
                    return;
                }
                handler(event);
            };
            window.addEventListener('mousedown', listener, { capture: true });
            return () => {
                window.removeEventListener('mousedown', listener);
            };
        }, [ref, handler]);
    };

    const getMenuClasses = () => {
        if (isMenuOpen) return styles.menuIsOpen
        return
    }

    const node = useRef();
    useOnClickOutside(node, () => {
        if (isMenuOpen) {
            toggleMenuMode();
        }
    })

    return (
        <div ref={node} className={`${styles.menu} ${getMenuClasses()}`}>
            <Navigation className={styles.menuColumn} linkClassName={styles.menuLink} activeLinkClassName={styles.activeLinkBurger} />
        </div>
    )
};