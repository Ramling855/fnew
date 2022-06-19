require("dotenv").config();
const express=require("express");
const path=require("path")

const app=express();

   app.use(express.static('dist'));
console.log(__dirname,  'dist', 'index.html')
   app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname,  'dist', 'index.html'));
   })

   let port=process.env.PORT || 4000;

app.listen(port,()=>{

    console.log("App listening at port",port);
})