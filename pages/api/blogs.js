// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// HERE WE ARE CREATING OUR OWN API FOR USING
// THE DATA IN BLOGPOST -> BLOG.JS

// PARSE IS USED TO CONVERT STRING TO OBJECT

import * as fs from "fs";
export default async  function handler(req, res) {
  let data=await fs.promises.readdir("blogData");
  let myFile;
  let allBlogs=[];
  for(let index=0;index<data.length;index++){
    const item=data[index];
    myFile=await fs.promises.readFile(('blogData/'+item),'utf-8')
    allBlogs.push(JSON.parse(myFile)); 
  }
  res.status(200).json({allBlogs});
}
  // fs.readdir("blogData", (err, data) => {
  //   console.log(data);
  //   let allBlogs;
  //   data.forEach((item) => {
  //     console.log(item)
  //     fs.readFile(('blogData/'+item)),(d) => {
  //       allBlogs.push(d);

  //     }
  //   })
  //   res.status(200).json({allBlogs});
  // });
