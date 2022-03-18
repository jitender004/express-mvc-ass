const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
    id : {type : Number, unique : true},
    name : {type : String, required : true},
    stud_id : [{type : mongoose.Schema.Types.ObjectId, ref : "student"},]
    
},{
    versionKey : false,
    timestamps : true
})
module.exports = mongoose.model("batch", batchSchema);