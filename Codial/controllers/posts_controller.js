const Post = require('../models/post')
const Comment = require('../models/comment');

module.exports.create = async function(req, res){
    try{
        await Post.create({
            content: req.body.content,
            user: req.user._id,
        });

        req.flash('success', 'Post Created Successfully');
        return res.redirect('back');
    }catch(err){
        req.flash('error', err);
        console.log('Error', err);
        return res.redirect('back');
    }
}


module.exports.destroy = async function(req, res){
    try{
        let post = await Post.findById(req.params.id);
        if(post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post: req.params.id});

            req.flash('success', 'post and associated comments deleted');
            return res.redirect('back');
        }else{
            req.flash('error', 'you cannot delete this post');
            res.redirect('back');
        }
    }catch(err){
        req.flash('error', err);
        console.log('Error', err);
        return res.redirect('back');
    }
}