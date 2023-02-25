import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
 
export default function () {
  const [blogs,setBlogs]=React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
  .then((response) => response.json())
  .then((data) =>
  setBlogs(data.allBlogs)
  );
  },[])

  const content=blogs.map(item => {
    return (
      <div className={styles.mainContent} key={item.title}>
        <Link style={{textDecoration:'none'}} href={`/blogpost/${item.slug}`}>
        <h3 className={styles.heading1}>{item.title}</h3>
        </Link>
        <p className={styles.cont}>{item.content.substr(0,400)}</p>
      </div>
    )
  })
  return (
    <div className={styles.container}>
      <h2>Popular Blogs</h2>
      {content}
    </div>
  );

}