const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express();
const db = require("./model/database")

db.authenticate()
    .then(()=>console.log('Database connected'))
    .catch(err=> console.log('Error: '+err))

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/",router)



app.listen('4006',()=>{
    console.log('Server started on port 4006')
})


module.exports = app;