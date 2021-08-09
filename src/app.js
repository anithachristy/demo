//https://docs.npmjs.com/cli/v7/commands/npm-init
//https://nodejs.org/en/docs/guides/

//npm run dev -- for development
//npm start -- for production

require('dotenv').config()
const env = process.env.NODE_ENV || 'production';
const config = require('../config.json')[env];
const path=require("path");
const express=require("express");

const employeeRouter=require("./routes/employee");

const port=config.APP.port || 8080;

const app=express();
app.use(express.json())

app.use('/employee', employeeRouter);


 app.get('/', function (req, res) {

    res.send('Hello World')
  })




app.listen(port,()=>{
    console.log(`${env} code from Location: ${path.join(__dirname)}`);
    console.log(`${env} code running on Port: ${port}`);
})
