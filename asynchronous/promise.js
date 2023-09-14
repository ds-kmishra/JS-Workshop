// Promise Maker --- Promise Receiver
// Server
function getWeather(){
    // 10 secs ---> Promise ---> pending | fullfilled | rejected
    // ..................... 10secs
        // resolved 
        // Promise{value: ...data....., status: ...fulfilled...., onFulfilled: ....callback function....}
        
        // rejected
        // Promise{value: ...error....., status: ...rejected...., onFulfilled: ....exception..will be thrown....}
       
    return new Promise(function(resolve, reject){ // Promise -{} ---> pending
        resolve(error) 
    })
}

// Client
getWeather() // aware that you are returning a promise object
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log('error')
})
.finally()


// --pending --resolved --rejected

// API  // task 
// operation asynchronous ---> callback function
//                          ---> promise { } ---> resolve, reject