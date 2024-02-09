import { useEffect, useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "../styles/Home.module.css";
import "../styles/globals.css";
import ParticlesComponent from '../components/Particles.js';

// Custom hook to detect device type
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    setDeviceType(isMobile ? 'mobile' : 'desktop');
  }, []);

  return deviceType;
};

export default function MyApp({ Component, pageProps }) {
  const deviceType = useDeviceType();

  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
      {deviceType === 'desktop' && <ParticlesComponent />}
    </>
  );
}
