var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var userSchema = new mongoose.Schema({
    email: String,
    name: String
});

var User = mongoose.model("User", userSchema);

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);


/*var newUser = new User({
    email: "charlie@Brown.edu",
    name: "Charli Brown"
});

newUser .save(function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});*/

var newPost = new Post({
    title: "Reflestions on Apple",
    content: "they are tasty"
});


newPost.save(function(err, post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});














