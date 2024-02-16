import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Otherprojects.module.css";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Certifications</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/files/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/files/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/files/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/files/favicons/site.webmanifest" />
      </Head>
      <div className={styles.container}>
        <div className={styles.heading}>Wordpress and other Projects</div>
        <ul className={styles.liste}>
          <a className={styles.links} href="https://www.darat-thaimassage.at/">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img
                  className={styles.images}
                  alt=" Logo"
                  src="/files/logos/darat.png"
                  width="40px"
                  height="40px"
                />
              </span>
              Darat Thaimassage
            </li>
          </a>
          <a className={styles.links} href="https://www.europetalks.eu/">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img
                  className={styles.images}
                  alt=" Logo"
                  src="/files/logos/europetalks.png"
                  width="40px"
                  height="40px"
                />
              </span>
              Europe Talks
            </li>
          </a>
          <a
            className={styles.links}
            href="https://jugendlichefuerjugendliche.wordpress.com/"
          >
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img
                  className={styles.images}
                  alt=" Logo"
                  src="/files/logos/ju4ju.png"
                  width="40px"
                  height="40px"
                />
              </span>
              Jugendliche für Jugendliche
            </li>
          </a>
          <a className={styles.links} href="http://www.hd-projekt.at/">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img
                  className={styles.images}
                  alt=" Logo"
                  src="/files/logos/hdp.png"
                  width="40px"
                  height="40px"
                />
              </span>
              HD Project
            </li>
          </a>
          <a className={styles.links} href="http://www.ribo-stein.at/">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img
                  className={styles.images}
                  alt=" Logo"
                  src="/files/logos/ribo.png"
                  width="40px"
                  height="40px"
                />
              </span>
              <div className={styles.ribodiv}>
                Ribo Stein
                <span className={styles.retro}>
                  &nbsp;&nbsp;&nbsp;Vorgängerversion
                </span>
              </div>
            </li>
          </a>
        </ul>
        <Footer />
      </div>
    </div>
  );
}
