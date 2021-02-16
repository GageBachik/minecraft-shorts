import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minecraft Shorts</title>
        <meta
          name="description"
          content="Minecraft short clips from twitch and youtube"
        />
        <meta name="og:title" property="og:title" content="Minecraft Shorts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Minecraft Shorts!</h1>
        <p className={styles.description}>Watch the latest #Shorts below</p>
        <div className={styles.grid}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLjzRZaV7FMr7_VwCSp25YcbzoSTx8ZLzv"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </main>

      <footer className={styles.footer}>
        Follow us on
        <a href="http://www.youtube.com/channel/UCaUIJK7vroE-2fFRKZLGQ_Q">
          YouTube
        </a>
      </footer>
    </div>
  );
}
