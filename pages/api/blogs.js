// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async  function handler(req, res) {
  fs.readdir("blogData", (err, data) => {
    console.log(data);
    let allBlogs;
    data.forEach((item) => {
      console.log(item)
      fs.readFile(('blogData/'+item)),(d) => {
        allBlogs.push(d);

      }
    })
    res.status(200).json({allBlogs});
  });
}
