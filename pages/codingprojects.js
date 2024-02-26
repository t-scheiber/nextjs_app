import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Codingprojects.module.css";
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
            <a className={styles.links} href="https://t-scheiber.github.io/AK_WeatherApp/">
              <li className={styles.eintrag}>Rock Paper Scissors App</li>
            </a>
            <a className={styles.links} href="https://advanced-react-course-portfolio.vercel.app/">
              <li className={styles.eintrag}>React Advanced Course: Portfolio App</li>
            </a>
            <a className={styles.links} href="https://react-basics-simplest-working-calculator-rho.vercel.app/">
              <li className={styles.eintrag}>React Basics Course: Simplest working Calculator App</li>
            </a>
            <a className={styles.links} href="https://t-scheiber.github.io/AK_WeatherApp/">
              <li className={styles.eintrag}>Weather App</li>
            </a>
            <a className={styles.links} href="https://todo-app-tscheiber.vercel.app/">
              <li className={styles.eintrag}>Todo App</li>
            </a>
            <a className={styles.links} href="https://t-scheiber.github.io/CalculatorApp">
              <li className={styles.eintrag}>Calculator App</li>
            </a>
            <a className={styles.links} href="https://fhtw-abschlussprojekt.thomasscheiber.com">
              <li className={styles.eintrag}>abschlussprojekt Web Development</li>
            </a>
          </ul>

            <Footer />
        </div>
    </div>
    );
  }