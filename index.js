
const express=require('express');
const app=express();

//load config from env file 
require("dotenv").config();
const PORT =process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

//import routes from todo api
const todoroutes=require("./routes/todos");
const todo = require('./model/Todo');
//mount the todo api routes
app.use("/api/v1",todoroutes);

//start server
app.listen(PORT,()=>{
  console.log(`server started at port no ${PORT}`);
})

//connect to the database

const dbconnect =require("./config/database");
dbconnect();

//default route

app.get("/",(req,res)=>{
  res.send(`<h1> this is HOMEPAGE </h1>`)
})
