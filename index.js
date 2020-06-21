const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/about",function(req,res){
    res.send("<h1>About Page</h1>");
})



app.listen(3000,function(){
    console.log("server is started at 3000");
})