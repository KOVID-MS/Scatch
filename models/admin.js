const mongoose  = require("mongoose");

const adminSchema = mongoose.Schema({
    fullname :{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    products:{
        type:Array,
        default:[]
    }
});

module.exports = mongoose.model("admin",adminSchema);