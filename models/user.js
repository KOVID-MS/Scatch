const mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    name :{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    cart:{
        type:Array,
        default : []
    },
    orders:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean
    }
});

module.exports = mongoose.model("user",userSchema);