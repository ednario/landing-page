import styles from '../styles/Home.module.css';
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  return ( 
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} ${styles.container}`}>
        <a className={styles.logo} href="#">Ednario<span>Andrade</span>.</a>
        <div className={styles.menu}>
          <ul className={styles.grid}>
            <li><a className={styles.title} href="#home">Início</a></li>
            <li><a className={styles.title} href="#about">Sobre</a></li>
            <li><a className={styles.title} href="#contact">Redes Sociais</a></li>
          </ul>
        </div>
        <div className={`${styles.toggle} ${styles.iconMenu}`}><FiMenu/></div>
        <div className={`${styles.toggle} ${styles.iconClose}`}><FiX/></div>
      </nav>
    </header>
  )
}