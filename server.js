const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'})
require("./db/conn.js");

app.use(express.json());


const Users = require('./model/userSchema');

app.use(require('./router/auth'))

const PORT = process.env.PORT || 8000;


// if(process.env.NODE_ENV == 'production'){
//     app.use(express.static("client/build"));
// }



//Lets try it
if(process.env.NODE.ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'front_end', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'front_end', 'build', 'index.html'))
    });
  
  }

app.listen(PORT,()=>{
console.log("Listening at port 5000");
});