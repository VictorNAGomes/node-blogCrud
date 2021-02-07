const express = require("express");
const app = express();
const bodyParser = require("body-parser");


//view engine
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(3001, ()=>{
    console.log("O servidor está rodando");
})