import React, { use } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import * as fs from 'fs';
export default function (props) {
  const [blog, setBlog] = React.useState(props.myBlog);
  return (
    <div className={styles.container}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <div>
        <p className={styles.content}>{blog && blog.content}</p>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
        { params: { slug: "how-to-learn-flask" } }, 
        { params: { slug: "how-to-learn-javascript" } },
        { params: { slug: "how-to-learn-nextJS" } }
    ],
    fallback: true, // can also be true or 'blocking'
  };
}

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const { slug } = context.query;
//   const res = await fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`);
//   const myBlog = await res.json();

//   // Pass data to the page via props
//   return {
//     props: { myBlog },
//   };
// }

export async function getStaticProps(context) {
    const {slug} =context.params;
    let myBlog=await fs.promises.readFile(`blogData/${slug}.json`,'utf-8')
  return {
    props: { myBlog : JSON.parse(myBlog)},
  };
}
