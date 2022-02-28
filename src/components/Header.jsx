import styles from '../styles/Home.module.css';
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  return ( 
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} ${styles.container}`}>
        <a className={styles.logo} href="#">Ednario<span href="#"> Andrade</span></a>
      </nav>
    </header>
  )
}