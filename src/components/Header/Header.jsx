import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../styles/header.module.css";
import BurgerMenuButton from '../UI/BurgerMenuIcon';
import Navigation from './Navigation';
import { SideMenu } from './SideMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.row}>
          <SideMenu />
          <BurgerMenuButton />
            <Link className={styles.homeLink} to="/">Головна сторінка</Link>
          <Navigation className={styles.rightRow} />
        </nav>
      </div>
    </header>
  )
}

export default Header