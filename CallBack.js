function getMessage(){
  setTimeout(()=>{
      console.log("Get Message")
  }, 1000)
    //  console.log("Get Message")
}

function DisplayMessage(){
    console.log("display Message")
}

function getTest(msg, callback){
    setTimeout(()=>{
        console.log(msg)
        callback()
    },1000)
}

getTest("Test Get", DisplayMessage)
//getMessage()
