import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <span className={styles.label}>Hello there! My name is</span>
        <h1 className={styles.h1}>Agustín Larzábal</h1>
        <p>
          Self-taught front-end developer from Argentina but currently living in
          Madrid, Spain. Passionate about building great developer experiences
          with emerging web technologies.
        </p>
        <p>
          I&apos;m on a journey to improve myself as a developer and in this
          website I&apos;ll be sharing all the things I&apos;ve learned and
          created over the years.
        </p>
        <p>Let&apos;s shape the future of the web together.</p>
      </section>
      <nav className={styles.nav}>
        <a
          className={styles.link}
          href="https://github.com/AgustinLarzabal"
          title="Agustín Larzábal GitHub Profile"
        >
          GitHub
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/agustinlarzabal/"
          title="Agustín Larzábal LinkedIn Profile"
        >
          LinkedIn
        </a>
        <a
          className={styles.link}
          href="mailto:larzabal.agustin@gmail.com"
          title="Contact Agustín Larzábal via e-mail"
        >
          Contact
        </a>
      </nav>
    </main>
  );
}
