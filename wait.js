

const express = require('express')
const app = express()
const port = 1996
const path=require("path");

app.use(express.static('./'))



app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
    });



app.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname,"./wait.html"));
});



 //pm2 start index.js --name Al-Mutanabi-Library
