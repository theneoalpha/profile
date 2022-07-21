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
if(process.env.NODE_ENV == "production"){
    app.use(express.static("./client/build"));
    const path = require("path");
    app.get("*", (req, res) => {`enter code here`
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })
}

app.listen(PORT,()=>{
console.log("Listening at port 5000");
});