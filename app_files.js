var express = require('express');
var app = express();
app.get('/topic/new', function(req,res){
    res.send('Hi');
})

app.listen(3000,function(){
    console.log('Connected, 3000 port!');
})

// pug 설정
app.set('view engine','pug');
app.set('views','./view');
app.get('/render', function(req,res){
    res.render('app_files_post')
})
app.post('/receiver',function(req,res){
    res.send('complete')
})