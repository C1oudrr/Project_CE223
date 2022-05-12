const express = require('express');
const app = express();

const port = 8080;

var id = 1630900130;
var status = "single";

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static('About'))

app.get("/get",(req,res) =>{
    res.send ("This is get method");
})

app.get("/",(req,res) =>{
    res.render('index')
})
app.get("/index2",(req,res) =>{
    res.render('index2')
})

app.get("/Lifestyle",(req,res) =>{
    res.render('Lifestyle')
})
app.get("/Business",(req,res) =>{
    res.render('Business')
})

app.get("/Green",(req,res) =>{
    res.render('Green')
})

app.get("/Healthy",(req,res) =>{
    res.render('Healthy')
})
app.get("/Home",(req,res) =>{
    res.render('Home')
})
app.get("/Contactus",(req,res) =>{
    res.render('Contact us')
})

app.listen(port,() => {
    console.log ("Server is Listening on port: ",port)
})