const express = require('express');
const app = express();
const routes = require('./src/routes/beers');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.get('/',(req,res)=> { 
    res.send('Hello World');
})


app.listen(4000,()=>{
    console.log("App is running at port no: 4000");
})