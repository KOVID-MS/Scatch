const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const URI = process.env.MONGOURI;

mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=>{
    console.log("Database Connected Successfully");
})
.catch((err)=>{
    console.log(err.message);
})

module.exports = mongoose.connection