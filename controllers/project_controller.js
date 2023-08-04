const Project = require('../models/project');
const Bug = require('../models/bug');


module.exports.create = (req,res)=>{
   Project.create({
    name:req.body.name,
    description:req.body.description,
    author:req.body.author
   }).then((project)=>{
    return res.redirect('back');
   }).catch((err)=>{
    return console.log("Error in creating data to database");
   })
};

module.exports.viewDetails = (req,res)=>{
   Project.findById(req.params.id)
   .populate({
      path:'bugs',
      populate:{
         path:'project'
      }
   })
   .exec().then((project)=>{
      if(!project){
         return res.redirect('back');
      }else{
         // project.bugs.find({})
         return res.render('viewDetails',{
            project:project
         })
      }
   }).catch((err)=>{
      return console.log(err,"Error in finding the id of project");
   })
}

module.exports.delete = (req,res)=>{
   Project.findByIdAndDelete(req.params.id).then(()=>{
      return res.redirect('back');
   }).catch((err)=>{
      return console.log("Error in deleting the project");
   })
};

module.exports.filter = (req,res)=>{
   console.log(req.query);
   return res.render('bugsReport');
}
