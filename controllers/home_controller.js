// module.exports.actionName=function(req,res){----}
const Post=require('../models/post')
module.exports.home=function(req,res){
    // console.log(req.cookies);
    // res.cookie('user',2)
    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:"Zable | Home",
    //         posts: posts
    //     })
    // })
    // return res.render('home',{title:'Zable'})
    Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home', {
            title: "Zable | home",
            posts: posts
        });
})};