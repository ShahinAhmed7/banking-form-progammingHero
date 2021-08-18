
document.getElementById('submit').addEventListener('click', function(){

    //get value from email
    const emailField = document.getElementById('email');
    const email = emailField.value;
    //console.log(email);

    //get password value
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    // wrong password value
    const wrongPassword = document.getElementById('wrongPassword');

    // Condition
    if(email == 'admin' && password == 123){
        window.location.href = 'success.html';
    } else{
        wrongPassword.innerText = 'Please type valid user name and password!';
        wrongPassword.style.color = 'red';
    }

})