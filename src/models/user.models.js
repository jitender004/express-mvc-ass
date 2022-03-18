const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id : {type : Number, required : true, unique : true},
    first_name : {type : String , required : true},
    last_name : {type : String , required : true},
    gender : {type : String , default : "Male"},
    DOB : {type : String , required : true},
    type : {type : String , required : true} //Student or Instructor
},{
    versionKey : false,
    timestamps : true
});
module.exports = mongoose.model("user", userSchema);