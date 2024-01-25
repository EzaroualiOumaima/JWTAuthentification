const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require('./Server/Routes/routes');
const userRoutes = require("./Server/Routes/users.routes");
const cookieParser = require("cookie-parser");
const port = 3000;
const app = express();
const {MONGO_URL} = process.env;
const Yaml = require("yamljs");
const swaggerDocument = Yaml.load('./swagger.yaml')

// swagger 

const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

app.use('/docs' , swaggerUi.serve , swaggerUi.setup(swaggerDocument) )

mongoose.connect(MONGO_URL)
.then (()=> {
    console.log('database conneted');

})
.catch((err) => console.log(err));

app.use(express.json());
app.use(cookieParser())
app.use('/api' , routes , userRoutes);

app.get('/hello' , (req, res)=> {
    res.send('welcome')
})

app.listen(port  , () => {
    console.log("server started ");
})