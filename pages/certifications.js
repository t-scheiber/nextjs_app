import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Certifications.module.css";
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
        <ul  className={styles.liste}>
          <li>

          </li>
        </ul>
        <Footer />
      </div>
    </div>
  );
}
