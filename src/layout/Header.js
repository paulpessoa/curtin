import styles from './Header.module.css';
import logo from '../image/logo192.png'

function Header () {
    return (
        <div className={styles.container}>
            <div>
                <img src={logo} alt="oi"/>
                <h1>Curtin</h1>
            </div>
        </div>
    )
}

export default Header;