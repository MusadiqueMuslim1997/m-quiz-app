import {auth,signInWithEmailAndPassword} from './firebase.js'



function login(){
    let userNAme = document.getElementById('userNAme');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    window.location.assign('verify.html')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    swal({
        title: "Invalid Candidate!",
        text: "You clicked the button!",
        icon: "error",
      });
  });

}


let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', login);
