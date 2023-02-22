import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

 
export default function () {
  return (
    <div className={styles.container}>
      <h2>Popular Blogs</h2>
      <div className={styles.mainContent}>
        <Link style={{textDecoration:'none'}} href="/blogpost/How to learn js"><h3 className={styles.heading1}>How to learn JS in 2022</h3></Link>
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
  );
}
