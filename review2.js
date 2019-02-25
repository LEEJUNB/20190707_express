const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Connection!'));
app.listen(3000,() => console.log('listening 3000 port'));

//정적파일설정
app.use(express.static('public'));

app.get('/repeat',function(req,res){
    var _div = 'title name';
    var _date = Date();
    var output = `
    <html>
        <head>
            <title> testnet </title>
            <meta charset='utf-8'>
        </head>

        <body>
            <h1> test h1 </h1>
            <ul>
                <div> ${_div}
                <div> 'good time'
                <div> ${_date}
            </ul>
        </body>
    `;
    res.send(output);
})

//semantic web
//이를위해 /:*
//이를위해 .params.*
app.get('/topic/:name', function(req,res){
    res.send(req.params.name);
});

// use to pug
app.set('view engine','pug');
app.set('views','view');
app.locals.pretty = 'true';
app.get('/pug',function(req,res){
    res.render('review2');
});