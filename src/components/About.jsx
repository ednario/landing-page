/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <section className={`${styles.section} ${styles.about}`} id="about">
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.text}>
            <h2 className={styles.title}>Sobre Mim</h2>
            <p>
            Olá me chamo Ednario Andrade, sou um Desenvolvedor Web Jr, 
            Técnico em Informática e um amante das Tecnologias da Informação. 
            Tenho 19 anos, atualmente curso Sistemas de Informação na UniJuazeiro. 
            </p>
            <br />
            <p>
            Possuo foco em desenvolvimento web com Javascript, Typescript, 
            NodeJs, React dentre outras tecnologias.
            </p>
            <br />
            <p>
            Atualmente estou a procura de uma oportunidade para que eu possa 
            adquirir experiência como Desenvolvedor.
            </p>
          </div>
        </div>
      </section>
  )
}