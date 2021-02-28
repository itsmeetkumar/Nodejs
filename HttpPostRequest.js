const http = require("https")

const data = JSON.stringify({
    name : "Meetkumar Patel",
    job: "Programmer"
});

const option ={
    hostname : 'reqres.in',
    path : '/api/users',
    method : 'POST',
    header :{
        'Content-Type' : 'application/json'
    }
}

const req = http.request(option,(res)=>{
    let body ='';
    console.log("Status code : ",res.statusCode)

    res.on('data', (chunk)=> {
        body += chunk;
    })
    res.on('end',()=>{
        console.log('Body', JSON.parse(data));
    })
})

req.write(data)
req.end();