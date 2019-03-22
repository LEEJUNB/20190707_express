const express = require('express');
const app = express();

app.get('/', function(req,res){
    console.log('Welcome');
});

app.listen(3000, () => console.log('3000 port listen'));

app.use(express.static('public'));

app.get('/html', function(req,res){
     var output = 
     `
     <html>
        <head>
            <title> good </title>
            <meta charset ='utf-8'>
        </head>
        <body>
            <h1> good </h1>
        </body>
     `
    res.send(output);
});

app.get('/repeat', function(req,res){
    var list = '';
    for (var i=0;i<10;i++){
        list = list + i;
    }
    res.send(list);
});

app.get('/repeatHtml', function(req,res){
    var list = '';
    for(var i=0;i<10;i++){
        list = list + i;
    }
    var output = 
     `
     <html>
        <head>
            <title> good </title>
            <meta charset ='utf-8'>
        </head>
        <body>
            <h1> good </h1>
            ${list}
        </body>
     `
    res.send(output);
})

app.set('view engine','pug');
app.set('views','view');

app.get('/pug',function(req,res){
    res.render('new', {Senior:'Town', hobby:'golf',time:Date()});
});

app.locals.pretty = true;

//QueryString
app.get('/query',function(req,res){
    res.send(req.query.name);
});

//Semantic
app.get('/query/:name/:add',function(req,res){
    res.send(req.params.name + ' ' + req.params.add)
});

app.get('/topic/:id/:next', function(res,req) {
    var topics = [
        'good',
        'gread',
        'awesome'
    ];

    var output = `
    <a href="/topic?id=0> goooood </a>
    <a href="/topic?id=1> grreeeeadt </a>
    <a href="/topic?id=2> awesoooome </a>
    ${topics[req.params.id]}
    `
    res.send(ouput);
});
