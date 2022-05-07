
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    
image: {type: String,},
name : { type: String,},
price : {type: Number,},
wiegt : { type : String,},
Description : {type :String,},
Benefits : { type : String,},
Info : { type : String,},
quantity : {type: Number}
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;