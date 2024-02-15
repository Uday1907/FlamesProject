const express=require('express');
const bodyParser=require('body-parser');
const flames=require(__dirname+'/code.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


let name1="";
let name2="";
let answer="START";
let answerImage="/images/"+answer+".png";
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    answerImage="/images/"+answer+".png";
        res.render('home',{
            flamesAnswer:answer,
            imageName:answerImage
        });
        answer="START";
        
})

app.post('/',function(req,res){
    name1=req.body.firstN;
    name2=req.body.secondN;
    answer=flames.getAnswer(name1,name2);
    answerImage="/images/"+answer+".png";
    console.log(answerImage);
    res.redirect('/');

})



app.listen('3000',function(){
    console.log("Server is Ready!");
})