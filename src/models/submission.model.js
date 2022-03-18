const mongoose = require('mongoose');
// evaluation_id(this will reference the evaluations collection), 
// student_id(this will reference the user collection), marks, createdAt, updatedAt
const submissionSchema = new mongoose.Schema({
    id : {type : Number, unique : true},
    eval_id : [{type : mongoose.Schema.Types.ObjectId , ref :"evaluation"}],
    student_id : [{type : mongoose.Schema.Types.ObjectId , ref : "student"}],

})
module.exports = mongoose.model("submission", submissionSchema)