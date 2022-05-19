import React from 'react';
import styles from './Footer.module.css'

function Footer () {
    return (
        <div className={styles.container}>
            <p>Created by</p>
            <a href="https://devjean.com" target="_blank" rel="noopener noreferrer"> Jean Carlos (Back) </a>  
            <a href="https://github.com/paulpessoa" target="_blank" rel="noopener noreferrer"> Paul Pessoa (Front) </a>
        </div>
    )
}

export default Footer;