// express
// pug
// use variable 

const express = require('express');
const app = express();

app.get('/', function(req,res) {
    res.send('first access pass')
});

app.listen(3000,()=> console.log('listening 3000 port!'));

//html파일을 출력하기

//정적파일 만들기, 우선 폴더 지정하자
app.use(express.static('public'));

//js에 반복문과 html
app.get('/repeatgrave', function(req,res) {
    var list = '';
    for(var i=0;i<5;i++){
        list = list + '<li> list menu </li>';
    }
    var output = `
    <!DOCTYPE>
    <html>
        <head>
            <title> test html </title>
            <meta charset='utf-8'>
        </head>

        <body>
            <h1> title name </h1>
            <h2> title2 </h2>
            ${list}
        </body>
    </html>
    `;
    res.send(output);
});

// pug설정
app.set('view engine','pug');
app.set('views','view');
// js에 pug끌어쓰기
app.locals.pretty  = true;
// pug변수쓰기

app.get('/pug', function(req,res) {
    res.render('pugweb1', {_title:'good',_li:'list',_div:'divname'});
});

// pug pretty만들기
