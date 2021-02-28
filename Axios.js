const axios = require("axios");

const data = JSON.stringify({
    name : "Meet",
    Job : "Time pass"
});

const options ={
    hostname:'reqres.in',
    path:'/api/users',
    method:'POST',
    header:{
        'Content-Type' : 'application/json'
    }
};

axios.post('https://reqres.in/api/users', data).then(res=>{
    console.log(`Status Code:${res.status}`);
    console.log(`Body : ${JSON.stringify(res.data)}`);
}).catch(err=>{
    console.log(err)
})