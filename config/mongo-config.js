const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

mongoose.connect(`${config.get("MONGOURI")}/scatch`)
.then(()=>{
    dbgr("Database Connected Successfully");
})
.catch((err)=>{
    dbgr(err.message);
})

module.exports = mongoose.connection