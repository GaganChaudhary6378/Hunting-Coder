import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs';
 
export default function blog (props) {
  const [blogs,setBlogs]=React.useState(props.allBlogs);
  // setBlogs(props.allBlogs)

  const content=blogs.map(item => {
    return (
      <div className={styles.mainContent} key={item.title}>
        <Link style={{textDecoration:'none'}} href={`/blogpost/${item.slug}`}>
        <h3 className={styles.heading1}>{item.title}</h3>
        </Link>
        <p className={styles.cont}>{item.content.substr(0,400)}</p>
        <Link style={{textDecoration:'none'}} href={`/blogpost/${item.slug}`}><button className={styles.btnEl}>Read More</button></Link>
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

// so here we are creating a get serverSideProp that will work only at the request time
// so the work that we are doing in the export default function blog now we are doing that in this function
  // export async function getServerSideProps(context) {
  //   let data=await fetch("http://localhost:3000/api/blogs")
  //   let allBlogs=await data.json();
  //   return {
  //     props: allBlogs, // will be passed to the page component as props
  //   }
  // }
  
  export async function getStaticProps(context) {
    let data=await fs.promises.readdir("blogData");
  let myFile;
  let allBlogs=[];
  for(let index=0;index<data.length;index++){
    const item=data[index];
    myFile=await fs.promises.readFile(('blogData/'+item),'utf-8')
    allBlogs.push(JSON.parse(myFile)); 
  };
  return {
    props:{allBlogs},
  }
}