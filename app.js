require('dotenv').config();

const express = require("express");
const path = require("path");



const homeRoute = require("./routes/home");
const phoneRoute = require("./routes/phonebook");

const app = express();

app.set("view engine" , "pug");
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));



app.use(homeRoute);
app.use(phoneRoute);
app.use((req,res,next)=>{
    res.send("<h1>Error 404: Page Not Found</h1>");
});

app.listen(3000,()=> console.log("Server running"));