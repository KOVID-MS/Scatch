const mongoose  = require("mongoose");

const productSchema = mongoose.Schema({
    image :{
        type: String
    },
    price:{
        type:Number
    },
    discount:{
        type:Number,
        default: 0
    },
    bgcolor:{
        type:String,
    },
    textcolor:{
        type:String,
    },
    panelcolor:{
        type:String,
    }
});

module.exports = mongoose.model("product",productSchema);