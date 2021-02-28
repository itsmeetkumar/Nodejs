
const http = require("http")

const host = '127.0.0.4'
const port =3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end("Welcome to HTTP server");
// })

// server.listen(port, host, ()=>{
//     console.log(`Server running at http://${host}:${port}/`);
// })


http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end("Welcome to HTTP server");
}).listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}/`);
})