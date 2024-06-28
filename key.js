document.addEventListener('DOMContentLoaded', function() {
    function submitKey() {
        let key = document.getElementById('key');
        if (key.value == '123') {
            window.location.assign('quiz.html');
        } else if (key.value == "") {
            swal("Please enter 123");
        } else {
            swal('Invalid key. Please enter 123');
        }
    }

    function csssubmitKey() {
        let key = document.getElementById('key');
        if (key.value == '234') {
            window.location.assign('quiz.html');
        } else if (key.value == "") {
            swal("Please enter 234");
        } else {
            swal('Invalid key. Please enter 234');
        }
    }

    function jsssubmitKey() {
        let key = document.getElementById('key');
        if (key.value == '345') {
            window.location.assign('quiz.html');
        } else if (key.value == "") {
            swal("Please enter 345");
        } else {
            swal('Invalid key. Please enter 345');
        }
    }

    let submitBtn = document.getElementById('submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitKey);
    } else {
        console.error("Element with id 'submit' not found.");
    }

    let csssubmitBtn = document.getElementById('csssubmit');
    if (csssubmitBtn) {
        csssubmitBtn.addEventListener('click', csssubmitKey);
    } else {
        console.error("Element with id 'csssubmit' not found.");
    }

    let jssubmitBtn = document.getElementById('jssubmit');
    if (jssubmitBtn) {
        jssubmitBtn.addEventListener('click', jsssubmitKey);
    } else {
        console.error("Element with id 'jssubmit' not found.");
    }
});
