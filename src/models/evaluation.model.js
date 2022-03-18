const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
    id : {type : Number , required : true, unique : true},
    date : {type : Date},
    Batch_id : [{type : mongoose.Schema.Types.ObjectId, ref : "batch"}],
},{
    versionKey : false,
    timestamps : true
})

module.exports = mongoose.model("evaluation", evaluationSchema);