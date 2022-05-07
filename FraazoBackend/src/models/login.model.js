
const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    
frist_name: {type: String,},
last_name : { type: String,},
age : {type: Number,},
mobile_number : { type : Number,}
});

const LoginProdeuct = mongoose.model("login", LoginSchema);

module.exports = LoginProdeuct;