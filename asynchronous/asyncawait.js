// SERVER
function getData(){
    /// ......
    return new Promise(resolve => {
        setTimeout(()=>{
          // ..... 5 secs
          resolve(56)  
        }, 4000) 
    })
}

// CLIENT 
async function gotTheData(){
    const data = await getData()// Promise
    console.log(data)
}

gotTheData()




