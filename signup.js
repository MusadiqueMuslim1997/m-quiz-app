

import{auth, createUserWithEmailAndPassword} from './firebase.js';


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
