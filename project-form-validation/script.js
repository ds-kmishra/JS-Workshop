const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Method to show error
function showError(input, message){
    const formControl = input.parentElement
    formControl.className = "form-control error"

    const small = formControl.querySelector('small')
    small.innerText = message
}

// Method to show success
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

// Method to validate the empty fields
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value==""){
        showError(input, `${input.id} is required`)
        } else {
            showSuccess(input)
        }
    });
}

// --TODO--
// 1. Check the number of characters in the 25 > username > 3 
// 2. email -- regex
// 3. 20>password > 6
// 4. password == password


// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault()

    // Following code lead to brekage of DRY principle 
    // if(username.value==""){
    //     showError(username, 'Username is required')
    // } else {
    //     showSuccess()
    // }

    checkRequired([username, email, password, password2])

    //console.log(username.parentElement.querySelector('small'))
})


