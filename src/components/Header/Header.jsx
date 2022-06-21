import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../styles/header.module.css";
import BurgerMenuButton from '../UI/BurgerMenuIcon';
import Navigation from './Navigation';
import { SideMenu } from './SideMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.row}>
        <SideMenu />
        <BurgerMenuButton />
        <Link className={styles.homeLink} to="/">Головна сторінка</Link>
        <Navigation className={styles.rightRow} activeLinkClassName={styles.activeLink} />
      </nav>
    </header>
  )
}

export default Header