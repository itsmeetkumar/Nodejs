// it is class
let promise = new Promise(function(resolve, reject){
    setTimeout(()=>reject(new Error("Whoop")),1000)
});

promise.then(
    result =>{
        console.log(result)
    },
    error => console.log(error)
)

function GetAfter(){
    console.log("Print After")
}

GetAfter()