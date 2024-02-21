
const express=require('express');
const bodyParser=require('body-parser');
const flames=require(__dirname+'/code.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const pg =require('pg');

const db=new pg.Client({
    
     connectionString: process.env.POSTGRESQL_EXTERNAL_URL,
});

db.connect();



let name1="";
let name2="";
let answer="START";
let answerImage="/images/"+answer+".png";
let use=1;
const PORT=3000;
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
    await db.query("INSERT INTO flamestable (first,second) VALUES ($1,$2)",[name1,name2]);
    use++;
    answer=flames.getAnswer(name1,name2);

    answerImage="/images/"+answer+".png";
    // console.log(answerImage);
    res.redirect('/');

})



app.listen(PORT,function(){
    console.log("Server is Ready!");
})