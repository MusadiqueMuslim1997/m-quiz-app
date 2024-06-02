



function signup(){
    window.location.assign('signup.html')
}


let signbtn = document.getElementById('signbtn');
signbtn.addEventListener('click', signup);


function profile(){
    window.location.assign('card.html')  
}
let log = document.getElementById('log');
log.addEventListener('click', profile)
