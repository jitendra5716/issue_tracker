const Project = require('../models/project');
module.exports.home = (req,res)=>{
    console.log(req.url);
    Project.find({}).then((project)=>{
        return res.render('home',{
            projects:project
        })
    })
};

