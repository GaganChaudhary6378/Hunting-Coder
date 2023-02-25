import React, { use } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

export default function(){
    const [blog,setBlog]=React.useState();
    const router=useRouter();
    React.useEffect(() => {
        if(!router.isReady){
            return;
        }
        const {slug}=router.query;
        fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`)
        .then((response) => response.json())
        .then((data) =>
        setBlog(data)
        );
    },[router.isReady])
    return (
        <div className={styles.container}>
            <h1>{blog && blog.title}</h1>
            <hr/>
            <div>
                <p className={styles.content}>{blog && blog.content}</p>
            </div>
        </div>
    )
}