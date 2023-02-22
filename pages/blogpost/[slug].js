import React, { use } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

export default function(){
    const router=useRouter();
    const {slug}=router.query;
    return (
        <div className={styles.container}>
            <h1>Title of the page {slug}</h1>
            <hr/>
            <div>
                Lorem ipsum dolor sit ameet consectetur, adipisicing elit.
            </div>
        </div>
    )
}