import { SpeedInsights } from "@vercel/speed-insights/next"
import "../styles/Home.module.css";
import "../styles/globals.css";
import ParticlesComponent from '../components/Particles.js';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights/>
      <Component {...pageProps} />
      <ParticlesComponent />
    </>
  );
}
