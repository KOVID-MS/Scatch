const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const URI = process.env.MONGOURI;

mongoose.connect(URI)
.then(()=>{
    console.log("Database Connected Successfully");
})
.catch((err)=>{
    console.log(err.message);
})

module.exports = mongoose.connection