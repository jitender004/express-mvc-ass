const mongoose = require("mongoose");
// has fields like roll id, current batch, createdAt, updatedAt
const studentSchema = new mongoose.Schema({
    roll_id : {type : Number, required : true, unique : true},
    marks : {type : Number, required : true},
    batch : {type : String , required : true},    
},{
    versionKey : false,
    timestamps : true
})
module.exports = mongoose.model("student", studentSchema);