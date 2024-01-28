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
        <div className={styles.heading}>Certificates</div>
        <ul className={styles.liste}>
          <a className={styles.links} href="/files/Meta-Front-End-Dev-Certificate.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt=" Logo" src="/files/logos/meta.png" />
              </span>
              Meta Front-End Developer
            </li>
          </a>
          <a className={styles.links} href="/files/AWS_Certificate.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt=" Logo" src="/files/logos/aws.png" />
              </span>
              AWS Cloud Solutions Architect
            </li>
          </a>
          <a className={styles.links} href="/files/IT-Automation-Python_Certificate.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt=" Logo" src="/files/logos/google.png" />
              </span>
              Google IT Automation with Python
            </li>
          </a>
          <a className={styles.links} href="/files/IT-Support_Certificate.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt=" Logo" src="/files/logos/google.png" />
              </span>
              Google IT Support
            </li>
          </a>
          <a className={styles.links} href="/files/EF_Certificate.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt=" Logo" src="/files/logos/ef.png" />
              </span>
              EF Language School C1
            </li>
          </a>
          <a className={styles.links} href="/files/FCE_Certificate.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt=" Logo" src="/files/logos/cambridge.png" />
              </span>
              Cambridge English: First
            </li>
          </a>
          <a className={styles.links} href="/files/ECDL.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt=" Logo" src="/files/logos/ecdl.png" />
              </span>
              ECDL
            </li>
          </a>
          <a className={styles.links} href="/files/makeITsafe.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt="Ecpat Logo" src="/files/logos/ecpat.png" />
              </span>
              make IT safe <sup>2.0</sup>
            </li>
          </a>
          <a className={styles.links} href="/files/Italian_Language_Certificate.pdf">
            <li className={styles.eintrag}>
              <span className={styles.logos}>
                <img className={styles.images} alt="Scuola Leonardo da Vinci Logo" src="/files/logos/scuolaLdV.png" />
              </span>
              Italian Language B1
            </li>
          </a>
        </ul>
        <Footer />
      </div>
    </div>
  );
}
