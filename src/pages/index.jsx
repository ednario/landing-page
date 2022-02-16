/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Main() {
  return (
    <body>
    <Header />

    <main className={styles.main}>

    <Home />
    <div className={styles.divider1}></div>

    <About />
    <div className={styles.divider2}></div>

    <Contact />
    <div className={styles.divider1}></div>
    </main>

  </body>
  )
}
