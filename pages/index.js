import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thomas Scheiber</title>
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
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Thomas Scheiber</h1>
          <h1>Web Developer</h1>
        </div>
        <div className={styles.container}>
          <a
            href="/files/pdf/ScheiberThomasCV.pdf"
            download="ScheiberThomasCV.pdf"
          >
            <div id="cv" className={styles.tile}>
              <Image
                className={styles.cvImage}
                src="/files/portrait.jpg"
                alt="Avatar"
                width={150}
                height={150}
              />
              <p>CV</p>
            </div>
          </a>

          <Link href="/codingprojects">
            <div className={styles.tile} id="codingprojects">
              <Image
                src="/files/coding.png"
                priority={true}
                alt="Coding Image"
                width={277}
                height={185}
              />
              <p>Coding Projects</p>
            </div>
          </Link>

          <Link href="/certifications">
            <div className={styles.tile} id="certifications">
              <Image
                src="/files/certificates.png"
                alt="Certificate"
                width={110}
                height={110}
              />

              <p>All Certifications</p>
            </div>
          </Link>

          <Link href="/otherprojects">
            <div className={styles.tile} id="otherprojects">
              <Image
                src="/files/Wordpress-Logo.svg"
                alt="Wordpress-Logo"
                width={110}
                height={110}
              />

              <p>Other Projects</p>
            </div>
          </Link>

          <div className={styles.social}>
            <Link href="https://www.linkedin.com/in/thomas-scheiber-857006151/">
              <div className={styles.half}>
                <Image
                  src="/files/linkedin.svg"
                  alt="LinkedIn-Logo"
                  width={80}
                  height={80}
                />
                <p>Linkedin</p>
              </div>
            </Link>

            <Link href="https://www.github.com/t-scheiber/">
              <div className={styles.half}>
                <Image
                  src="/files/github.svg"
                  alt="Github-Logo"
                  width={80}
                  height={80}
                />
                <p>Github</p>
              </div>
            </Link>
          </div>

          <div className={styles.photography}>
            <Link href="mailto:tom.scheiber@gmx.at">
              <div className={styles.quarter}>
                <Image
                  src="/files/envelope-solid.svg"
                  alt="E-Mail me"
                  width={50}
                  height={50}
                />
                <p>E-Mail</p>
              </div>
            </Link>

            <Link href="tel:+436502772241">
              <div className={styles.quarter}>
                <Image
                  src="/files/phone-solid.svg"
                  alt="Call me"
                  width={50}
                  height={50}
                />
                <p>Phone</p>
              </div>
            </Link>

            <Link href="https://www.instagram.com/thomasscheiberphotography">
              <div className={styles.quarter}>
                <Image
                  src="/files/instagram.svg"
                  alt="Instagram Logo"
                  width={50}
                  height={50}
                />
                <p>Instagram</p>
              </div>
            </Link>

            <Link href="https://www.facebook.com/thomasscheiberphotography">
              <div className={styles.quarter}>
                <Image
                  src="/files/facebook.svg"
                  alt="Facebook Logo"
                  width={50}
                  height={50}
                />
                <p>Facebook</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
