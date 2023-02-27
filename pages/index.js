import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.description}>
            <h1>Hunting Coder&nbsp;</h1>
            <p>A blog for hunting coders by a hunting coder</p>
          </div>
          <h2>Popular Blogs</h2>
          <div className={styles.mainContent}>
            <h3>How to learn JS in 2022</h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </div>
          <div className={styles.mainContent}>
            <h3>How to learn JS in 2022</h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </div>
          <div className={styles.mainContent}>
            <h3>How to learn JS in 2022</h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </div>
        </div>
      </main>
    </>
  );
}
