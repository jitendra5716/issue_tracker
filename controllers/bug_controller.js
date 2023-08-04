const Project = require('../models/project');
const Bug = require('../models/bug');

module.exports.create = (req,res)=>{
    Project.findById(req.body.project).then((project)=>{
        if(!project){
            return res.redirect('back');
        }else{
            Bug.create({
                title:req.body.title,
                description:req.body.description,
                labels:req.body.labels,
                author:req.body.author,
                project:req.body.project
            }).then((bug)=>{
                project.bugs.push(bug);
                project.save();
                return res.redirect('back');
            }).catch((err)=>{
                return console.log("Error in creating bug",err);
            })
        }
    }).catch((err)=>{
        return console.log("Error in finding id by using hide input");
    })
};

