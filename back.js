


function back() {
    window.location.assign('card.html');
}
let backBtn = document.getElementById('back');
backBtn.addEventListener('click', back)

function htmlQuizKey() {
window.location.assign('htmlkey.html')
}
let quiz1 = document.getElementById('quiz1')
quiz1.addEventListener('click',htmlQuizKey)

function cssQuizKey() {
    window.location.assign('csskey.html')
    }
    let quiz2 = document.getElementById('quiz2')
    quiz2.addEventListener('click',cssQuizKey)

    function jsQuizKey() {
        window.location.assign('jskey.html')
        }
        let quiz3 = document.getElementById('quiz3')
        quiz3.addEventListener('click',jsQuizKey)

        let key = document.getElementById('key');
        if(key.value == '123'){
            window.location.assign('quiz.html')
        }
        else{
            swal('Invalid key Please Enter 123')
        }