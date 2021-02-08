const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//importing models
const Article = require("./articles/Article");
const Category = require("./categories/Category");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//view engine
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//connection
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso!")
    }).catch((err)=>{
        console.log("ERRO: " + err);
    });

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(3001, ()=>{
    console.log("O servidor está rodando");
})