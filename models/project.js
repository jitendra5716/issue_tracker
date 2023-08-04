const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    author:{
        type:String,
        required:true
    },
    bugs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Bug'
        }
    ]
},{
    timestamps:true
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;