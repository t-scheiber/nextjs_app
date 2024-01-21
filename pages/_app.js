import "../styles/Home.module.css";
import "../styles/globals.css";
import Particles from '../components/Particles.js';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Particles />
    </>
  );
}
