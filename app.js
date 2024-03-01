
const express=require('express');
const bodyParser=require('body-parser');
const flames=require(__dirname+'/code.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const pg =require('pg');

const db=new pg.Client({

    user:process.env.PG_USER,
    host:process.env.PG_HOST,
    database:process.env.PG_DATABASE,
    password:process.env.PG_PASSWORD,
    port:process.env.PG_PORT
});

db.connect();



let name1="";
let name2="";
let answer="START";
let answerImage="/images/"+answer+".png";
const port=process.env.Port||3000;
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

app.post('/',async function(req,res){
    name1=req.body.firstN;
    name2=req.body.secondN;
    await db.query("INSERT INTO flamestable (firstname,secondname) VALUES ($1,$2)",[name1,name2]);
    answer=flames.getAnswer(name1.toLowerCase(),name2.toLowerCase());
    answerImage="/images/"+answer+".png";
    // console.log(answerImage);
    res.redirect('/');

})



app.listen(port,function(){
    console.log("Server is Ready!");
})