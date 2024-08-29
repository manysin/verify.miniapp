"use client"
import { useState } from "react";
import styles from "./page.module.css";
import LoadingScreen from "./screens/splash-screen/page";

export default function Home() {
  const [initedApp, setInitedApp] = useState(false);
  return (
    <main className={styles.main}>
      {!initedApp && <LoadingScreen />}
    </main>
  );
}
