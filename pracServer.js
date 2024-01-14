const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log('Request Made');

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.write('<h1 style="text-align:center">error</h1>');
        }else{
            res.write(data);
            res.statusCode = 200;
        }
        res.end();
    });

});


server.listen(3000,'localhost',(req,res)=>{
    console.log("Listening for requests on port 3000");
});