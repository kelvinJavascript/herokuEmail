var http=require("http");
var port= process.env.PORT||5000;
var express = require('express')
var app = express(); 
app.get('/', function (req, res) {
	res.writeHead("Content-Type","text/html")
	res.end('<iframe src="google.com"></iframe>')
});/*
app.get('/draw',(req,res)=>{
	res.writeHead("Content-Type","text/html")
	fs.createReadStream("./html/draw.html").pipe(res)
})*/
 
app.listen(port)
