
const mongoose = require("mongoose");

const VegitableSchema = new mongoose.Schema({
    
    image: {type: String,},
    name : { type: String,},
    price : {type: Number,},
    weight : { type : Number},
    feild : {type : String},
    qty : {type: Number, default: 0},
    Description : {type :String,},
    Benefits : { type : String,},
    Info : { type : String,}
});

const VegitablesProdeuct = mongoose.model("vegitables", VegitableSchema);

module.exports = VegitablesProdeuct;