const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
    },
    description:{
        type:String,
        required:true
    },
    labels:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);

const Bug = mongoose.model('Bug',bugSchema);

module.exports = Bug;