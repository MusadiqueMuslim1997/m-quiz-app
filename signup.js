

// import{auth, createUserWithEmailAndPassword} from './firebase.js';


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
  
//     const user = userCredential.user;
    
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
    
//   });


function sup(){
    window.location.assign('index.html')
}

 let logbtn = document.getElementById('logbtn');
 logbtn.addEventListener('click', sup)


