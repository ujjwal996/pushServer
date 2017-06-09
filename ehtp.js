var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

/*http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-Type' : 'application/json'
    });
    var obj = {
        first : "whoisit",
        second : "whatisgoingon"
    }
    response.end(JSON.stringify(obj));
    
}).listen(1337,'127.0.0.1');
*/

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var port = process.env.PORT || 3000;

var app = express();
app.listen(port);

app.get("/",function(req,res){
    res.writeHead({'Content-Type':'text/html'});
    fs.createReadStream("./index.html").pipe(res);
});

app.post('/' , urlencodedParser , function(req,res){
    if(req.body) res.send("HAHAHAHA");
    console.log(req.body);
});


app.get("/form/:id",function(req,res){
    res.send("Hello " + req.params.form);
})