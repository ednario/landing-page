/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';
import { FiGithub } from "react-icons/fi";


export default function Header() {
  return (
    <section className={`${styles.section} ${styles.home}`} id="home">
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.image}>
            <img
              src="./images/carton.png"
              alt="Carton Ednario"
            />
          </div>
          <div className={styles.text}>
            <h2 className={styles.title}>Olá, Bem vindo ao meu portfólio</h2>
            <p>
              Me chamo Ednario Andrade
            </p>
            <a className={styles.button} href="https://github.com/ednario">Acesse o meu GitHub<i className={styles.iconGit}>< FiGithub/></i></a>
          </div>
        </div>
      </section>
  )
}