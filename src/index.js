const express = require('express')
const bodyParser = require('body-parser')
const router = require("./router")
const db = require("./model/database")

const app = express();


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set("views", "views")
app.set("view engine", "hbs")
app.use("/",router)



app.listen('3000',()=>{
    console.log('Server started on port 3000')
})


module.exports = app;