const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('good');
})

app.listen(3000,()=>console.log('300port listen'));

app.use(express.static('public'));

//queryString
app.get('/query',function(req,res){
    res.send(req.query.name);
});

//SemanticWeb
app.get('/Semantic/:id', function(req,res){
    res.send(req.params.id);
})

//SemanticWeb for Variable and for function
//복습할 부분임 ★★★★★
app.get('/Semantics/:id',function(req,res){
    var arr = [
        'good','great','awesome'
    ]

    var output = `
    <a href = /Semantics?id=0> good man </a>
    <a href = /Semantics?id=1> great man </a>
    <a href = /Semantics?id=2> awesome man </a>
    ${arr[req.params.id]}
    `
})

//take the pug 
app.set('view engine','pug');
app.set('views','view');
app.get('/pug',function(req,res){
    res.render('new');
});


//make Repetitive Statement into pug

