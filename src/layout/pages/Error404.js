import img404 from '../../image/error404.png'
import styles from './Error404.module.css'
import { Link } from 'react-router-dom'

function Error404() {
       return (
        <div>
          <Link to="/">
            <img className={styles.error404} src={img404} alt="Error 404"/>
          </Link>
        </div>
  );
}

export default Error404;