// Client 
const token = 'BQATj6FoB242vfsPQFNHPyIRxF7cgN6NuSQIbD6g2A3HGJSsjuEzDOG9FZkG_DdXgJe5y4SEVc_GZjv-cCAFCzzLrrfEk8LG6K5ZvIB0tV-5V4yTTXasQatel-2-xGV--u6beow84tdLQyL9IKSlOwKXdMj59txEOWukg-ZVn3eXSJbEmQa3aYJRPtTL_l2-s-ttEXIPnakYqMENg0helL6YjfxkjToXgW9PBnL33Q95lWtwEW-vkp_fvO1tTDqi9iQjSbWDvFDWiWjfFZKI';
const url = "https://api.spotify.com/v1/artists/0LcJLqbBmaGUft1e9Mm8HV"

// { error: { status: 401, message: 'No token provided' } }

    // error -> 401 - service not found   
    // Client ---> Server 
    // ---> Promise not fullfilled | or the error received from the server

const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
    })

// Promise resolved ---> DATA | ERROR 
// Promise rejected ---> EXCEPTION -> try catch 
async function getData(){
    try{
        const response = await fetch(request) 
        const data = await response.json()
        if(response.status == 200) {
            console.log("Success : ", data)
        } else {
            console.log('Server Error : ', data.error.message)
        }
    } catch (error) {
        console.log('ERROR : ', error)
    } 
}

getData()


