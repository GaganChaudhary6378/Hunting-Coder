import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navEl}>
      <ul>
        <Link href="/">
          <li className={styles.lEl}>Home</li>
        </Link>
        <Link href="/about">
          <li className={styles.lEl}>About Us</li>
        </Link>
        <Link href="/blog">
          <li className={styles.lEl}>Blogs</li>
        </Link>
        <Link href="/contact">
          <li className={styles.lEl}>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
