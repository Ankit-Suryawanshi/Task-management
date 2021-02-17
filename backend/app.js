const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/test_management"; 

const bodyParser = require('body-parser');
const router = require('./router')

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open",()=>{
  console.log("Database connection created!!!");
})

app.use(bodyParser.json());
app.use(cors('*'));
app.use('/api', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
  console.log(`Listening on Port ${PORT}`);
});