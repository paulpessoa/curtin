import React from 'react';
import styles from './Header.module.css';
import logo from '../../image/logo-bg.png'

function Header () {
    return (
        <div className={styles.container}>
            <div className={styles.navmenu}>
                <a href="https://github.com/paulpessoa/curtin" target="_blank" rel="noopener noreferrer">
                    <img className={styles.logo} src={logo} alt="oi"/>
                    {/* <h1>Link Shortener</h1> */}
                </a>
            </div>
        </div>
    )
}

export default Header;