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

