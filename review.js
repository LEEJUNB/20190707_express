// express
// pug
// use variable 

const express = require('express');
const app = express();

app.get('/', function(req,res) {
    res.send('first access pass review.js')
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
// pug폴더로 view지정
app.set('views','view');
// js에 pug끌어쓰기 // pug변수쓰기
// new.pug쓰기
app.get('/pug',function(req,res){
    res.render('new', {Senior:'RestartTown',hobby:'date',time : Date()});
});
// pug pretty만들기
app.locals.pretty  = true;


//QueryString
app.get('/query',function(req,res){
    res.send(req.query.name);
});

//semantic web
//이를위해 /:*
//이를위해 .params.*
app.get('/topic/:name/:add', function(req,res){
    res.send(req.params.name+' '+req.params.add);
});

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

// ★ get, post 방식 비교분석

// post를 위한 post.pug파일 쓰기
// pug파일을 불러오기위함
app.get('/post',function(req,res){
    res.render('post',{_write_section:'글을 작성하세요'})
});

// pug화면에서 작성되고 submit된 것을 받고 출력시키는 화면
// get방식에선 입력한 것이 그대로 나타남
app.get('/form_receiver', function(req,res){
    var title = req.query.text_pug;
    var description = req.query.description_pug;
    res.send(title+ ' '+ description);
});

// get방식이 아닌 post방식으로 입력
app.post('/form_receiver', function(req,res){
    res.send('Hello Post!');
});

// get 방식에선 입력한 값이 출력됐다.
// post에서도 할 수 있다. 바로 req.body.* 을 통해서말이다.
// 그러나 req.body.*은 body-parser라는 미들웨어가 있어야 쓸 수 있다.
app.post('/form_receiver', function(req,res){
    var title = req.body.text_pug
    var description = req.body.description_pug
    res.send(title+' '+description);
})

// post방식에서 출력물을 띄우기 위해
// req.body.*을 사용해야한다.
// 그러나 이를 위해선 body-parser라는 미들웨어를 설치해야한다.
var bodyParser = require('body-parser')
app.use(bodyParser.urlencodeed({extended : false}))

// upload file save
// continue => app_files.js