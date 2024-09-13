"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>ユーザプロフィール!
        <div>アカウント名<img src="user_image.png"></img></div>
        <div>べすと朝ごはん！
          <img src="breakfast_image.png"></img>
        </div>
        <div>今週の朝ごはん <img src="breakfast_image.png"></img>
          <div>○月○日</div></div>

      </h1>
    </main>
  );
}
