var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

/*var george = new Cat({
    name: "Rani",
    age: 10,
    temperament: "Evil"
});
george.save(function(err, cat){
    if(err){
        console.log("SOMETHIND WENT WRONG")
    }
    else{
        console.log("WE JUST SAVED A CAT TO THE DB:")
        console.log(cat);
    }
});*/

Cat.find({}, function(err, cats){
    if(err){
        console.log(("OH NO ERROR!"));
        console.log(err);
    }else{
        console.log("ALL THE CATS....");
        console.log(cats);
        
    }
})