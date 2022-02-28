/* eslint-disable @next/next/no-img-element */
import { FiInstagram, FiPhone, FiMail, FiTwitter, FiFacebook } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <section className={`${styles.section} ${styles.contact}`} id="contact">
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.text}>
            <h2 className={styles.title}>Redes Sociais</h2>
            <p>
              Caso tenha interesse em contratar um desenvolvedor web, 
              entre em contato atravéz do meu WhatsApp clicando no botão abaixo
            </p>
            <a
              href="https://wa.me/+5588994386181"
              className={styles.button}
              target="_blank" rel="noreferrer"
              ><i><BsWhatsapp/></i> Entrar em contato</a
            >
          </div>

          <div className={styles.links}>
            <ul className={styles.grid}>
            <a className={styles.button}
              target="_blank" rel="noreferrer">
                <i><FiPhone/></i>(88) 99438-6181</a>

            <a  className={styles.button}
             href="mailto:joseednario637@gmail.com"
              target="_blank" rel="noreferrer">
                <i><FiMail/></i> Email</a>
            
            <a  className={styles.button}
             href="https://instagram.com/ednario_andrade"
              target="_blank" rel="noreferrer">
                <i><FiInstagram/></i> Instagram</a>

            <a  className={styles.button}
             href="https://facebook.com/ednario.lima.3/"
              target="_blank" rel="noreferrer">
                <i><FiFacebook/></i> Facebook</a>

            <a  className={styles.button}
             href="https://twitter.com/EdnarioAndrade"
              target="_blank" rel="noreferrer">
                <i><FiTwitter/></i> Twitter</a>
            </ul>
          </div>
        </div>
      </section>
  )
}