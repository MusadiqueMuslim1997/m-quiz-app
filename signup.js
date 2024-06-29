

import { auth, createUserWithEmailAndPassword } from './firebase.js';
// let userName = document.getElementById('userName').value;
// localStorage.setItem('user',JSON.stringify({name:userName}));
// let userData = JSON.parse(localStorage.getItem('user'))

function signUp() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
   

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            const user = userCredential.user;
            window.location.assign('index.html')
            

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           
            swal({
                title: "Something wrong!",
                text: "You clicked the button!",
                icon: "error",
            });


        });

}
let signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click', signUp)

function sup() {
    window.location.assign('index.html')
}

let logbtn = document.getElementById('logbtn');
logbtn.addEventListener('click', sup)

