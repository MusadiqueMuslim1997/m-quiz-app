import { auth, onAuthStateChanged, sendEmailVerification } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
    let youremail = document.getElementById('youremail');
    let verify = document.getElementById('verify');

    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    if (user) {

        const uid = user.uid;
        youremail.innerHTML = user.email;
        if (user.emailVerified == true) {
            verify.innerHTML = "Your Email is verified";
            verify.style.color = 'green';
            btn2.style.display = 'flex';
            btn1.style.display = 'none';
           
        }
        else {
            verify.innerHTML = "Your Email is not verify";
            verify.style.color = 'red'

        }
        console.log(user);
    } else {

    }
});


function send() {

    sendEmailVerification(auth.currentUser)
        .then(() => {

            swal("Email verification sent")


        });
}
btn1.addEventListener('click', send)

function cont() {
    window.location.assign('card.html')
}
btn2.addEventListener('click',cont)