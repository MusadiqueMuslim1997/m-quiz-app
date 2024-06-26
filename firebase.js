
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyAgayIQ5LkJPyYoJovrr55kIE694fj1NeA",
    authDomain: "quiz-app-90e56.firebaseapp.com",
    projectId: "quiz-app-90e56",
    storageBucket: "quiz-app-90e56.appspot.com",
    messagingSenderId: "751498299853",
    appId: "1:751498299853:web:601078f8bdce8823831c84"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification
}