

let submitBtn = document.getElementById('submit')

function submitKey(){

    let key = document.getElementById('key');
    if(key.value == '123'){
        window.location.assign('quiz.html')
    }
    else if(key.value == ""){
        swal("Please enter 123")
    }
    else{
        swal('Invalid key Please Enter 123')
    }
}
submitBtn.addEventListener('click', submitKey)