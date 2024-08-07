const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
}
)

promiseOne.then(function(){
    console.log("Promise Consumed");   
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async2 resolved.")
})


const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"Prajwol",
            email:"abc@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour=new Promise (function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"prajwol",password:"12345"})
        }
        else{
            reject ('Error:Something went wrong')
        }
    },1000)
})

promiseFour
        .then((user)=>{
            console.log(user);
            return user.username
        })
        .then((username)=>{
            console.log(username)
        })
        .catch(function(error){
            console.log(error)
        })
        .finally(function(){
            console.log('The promise is either rejected or resolved.');
        })


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"alpha",password:"12345"})
        }
        else{
            reject ('Error:Alpha JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// promise is object

async function getAllUsers(){
    
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(response)
    const data=await response.json()
    console.log(data)
    } catch (error) {
        console.log("Error is:",error);
    }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data);
})
