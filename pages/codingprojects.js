import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";

export default function Home() {
    return (
      <div>
        <Head>
          <title>Coding Projects</title>
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
          <div className={styles.heading}>Coding Projects</div>
          <ul className={styles.liste}>
            <a className={styles.links} href="github.io">
              <li className={styles.eintrag}></li>
            </a>
          </ul>

            <Footer />
        </div>
    </div>
    );
  }