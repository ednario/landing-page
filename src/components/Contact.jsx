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
              <li><i><FiPhone/></i> (88) 99438-6181</li>
              <li><i>< FiMail/></i>
              <a className={styles.contactButton} href="mailto:joseednario637@gmail.com">joseednario637@gmail.com
              </a></li>
              <li>
              <i>< FiInstagram/></i>
              <a className={styles.contactButton} href="https://instagram.com/ednario_andrade">Instagram
              </a></li>
              <li>
              <i>< FiFacebook/></i>
              <a className={styles.contactButton} href="https://facebook.com/ednario.lima.3/">Facebook
              </a></li>
              <li>
              <i>< FiTwitter/></i>
              <a className={styles.contactButton} href="https://twitter.com/EdnarioAndrade">Twitter
              </a></li>
            </ul>
          </div>
        </div>
      </section>
  )
}