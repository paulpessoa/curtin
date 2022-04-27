import React from 'react';
import styles from './Header.module.css';
import logo from '../image/logo192.png'

function Header () {
    return (
        <div className={styles.container}>
            <div className={styles.navmenu}>
                <img className={styles.logo} src={logo} alt="oi"/>
                <h1>Curtin - Link Shortener</h1>
            </div>
        </div>
    )
}

export default Header;