const mongoose = require("mongoose");
const DB = process.env.DATABASE
mongoose.connect(DB).then(()=>{
    console.log("Connection successul");
}).catch((err)=>{
    console.log("Connection Error");
})