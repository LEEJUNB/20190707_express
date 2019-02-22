const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('<h1> This is Silver town Web site </h1> <h2> we must send the exact information out people for justice society </h2> <h3> for 2020 General Election '));
app.listen(2000,() => console.log('3000 port listen'));
app.use(express.static('public'));

app.get('/login', (req,res) => res.send('Enter your information'));
app.get('/pretty', (req,res) => 
    res.send('<h3> korean tradition custom hanbock </h3> <image src="/mybest3_capture.png">'));

app.get('/dynamic', function(req,res){
    var lis = '';
    var j = '';
    for(var i=0; i<5; i++){
        lis = lis+ '<li>select the menu</li>';
        j = 1 + i;
    }
    var time = Date();
    var output = `
    <DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <title>Silver Bell Web Site</title>
        </head>
        <body>
            <h1> this is dynamic web site for silver </h1>
            <h2> we must make the big size font </h2>
            <ul>
                ${lis}
                ${j}
            </ul>
                <h3> the current time </h3>
                ${time}
        </body>
    </html>
    `;
    res.send(output);
});

app.set('view engine','pug');
app.set('views','./view');
app.get('/template', function(req,res){
    res.render('new');
});

//app.locals.pretty = true;