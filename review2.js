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


// use to pug
app.set('view engine','pug');
app.set('views','view');
app.locals.pretty = 'true';
app.get('/pug',function(req,res){
    res.render('review2');
});

//QueryString
app.get('/query',function(req,res){
    res.send(req.query.name);
});

//semantic web
//이를위해 /:*
//이를위해 .params.*
app.get('/semantic/:id', function(req,res){
    res.send(req.params.id)
})

//semantic web + array
app.get('/topics/:id',function(req,res){
    var arr = [
        '20181227',
        'continue?',
        'when I ending this project'
    ];
    res.send(arr[req.params.id]);
})

app.get('/topicss/:id/:next',function(req,res){
    var topics = [
        'test',
        'when',
        'how'
    ];

    var output = `
    <a href="/topicss?id=0> JS 0 </a>
    <a href="/topicss?id=1> JS 1 </a>
    <a href="/topicss?id=2> JS 2 </a>
    ${topics[req.params.id]}
    `
    res.send(output);
});

