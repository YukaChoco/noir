"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import SplashPage from "./_components/page/SplashPage";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (showSplash) {
      setTimeout(() => {
        setShowSplash(false);
      }, 3000);
    }
  }, [router]);

  // if (showSplash) {
  //   return <SplashPage />;
  // }

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>起きろ!朝ごはんReal</h1>
      今日のタイトル！
    </main>
  );
}
