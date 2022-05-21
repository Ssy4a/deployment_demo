import React, { useContext, useRef } from 'react';
import styles from "../../styles/header.module.css"
import { MenuContext } from '../../context/menuContext';
import Navigation from './Navigation';
import { useEffect } from 'react';

export const SideMenu = () => {

    const useOnClickOutside = (ref, handler) => {
        useEffect(() => {
            const listener = event => {
                /*                if (!ref.current || ref.current.contains(event.target)) {
                                    return;
                                }*/
                handler(event);
            };
            document.addEventListener('mousedown', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
            };
        }, [ref, handler]);
    };

    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
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
            <Navigation className={styles.menuColumn} linkClassName={styles.menuLink} />
        </div>
    )
};