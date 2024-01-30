// const http=require('http')
// const port=3000;


// const server=http.createServer((req,res)=>{
//     console.log(req.url)
    
//     res.end("hello")
// })

// server.listen(port,()=>{
//     console.log("server started")
// })

const express= require('express')
const mongoose= require('mongoose');
const Blogs = require('./Models/Blogs');
require('dotenv').config()
const Dburl = process.env.mongourl;
mongoose.connect(Dburl)
const app= express()
const port=3000;
app.use(express.json())


app.get('/Daivesh',(req,res)=>{
    console.log(req.url)
    res.send("it's 7 letters")
}
)

app.listen(port,()=>{
    console.log("listening")
})


app.post('/createblog',(req,res)=>{
    const Title = req?.body?.title;
    const Subtitle = req?.body?.Subtitle;
    const Description = req?.body?.Description;
    const Image = req?.body?.Image;
    const Video = req?.body?.Video;
    const Content = req?.body?.Content;

    const blog = new Blogs(
    {
        title:Title,
        Subtitle:Subtitle,
        Description:Description,
        Image:Image,
        Video:Video,
        Content:Content,

    })

    blog.save()

   

    res.json({
        "Title":Title,
        "Subtitle":Subtitle,
        "Description":Description,
        "Image":Image,
        "Video":Video,
        "Content":Content, 
    })
})


app.get('/api/blogs', async (req, res) => {
    try {
      const blogs = await Blogs.find();
  
      res.json(blogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });




