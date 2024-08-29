"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import LoadingScreen from "./(screens)/splash/page";
import HomeScreen from "./(screens)/home/page";

export default function Home() {
  const [initedApp, setInitedApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitedApp(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      {!initedApp ? <LoadingScreen /> : <HomeScreen />}
    </main>
  );
}
