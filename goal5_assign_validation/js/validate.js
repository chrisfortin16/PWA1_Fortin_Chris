/*
     Developed by the JavaScript team at Fullsail
     Date: 24/3/15
     Name: Chris Fortin
*/

(function(){
    var button = document.getElementById('f_submit');
    myform.onsubmit = function(e){

        var inputUsername = document.querySelector('#f_username');
        var inputEmail = document.querySelector('#f_email');
        var inputPhone = document.querySelector('#f_phone');
        var inputPassword = document.querySelector('#f_password');
        var inputSSN = document.querySelector('#f_ssn');

        validateField(inputUsername);
        validateField(inputEmail);
        validateField(inputPhone);
        validateField(inputPassword);
        validateField(inputSSN);



        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = /^[a-z,A-Z]+$/
        }else if (inputName.name === 'f_email'){
            var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        }else if (inputName.name === 'f_phone'){
            var pattern = /^\d{3}-\d{3}-\d{4}$/
        }else if (inputName.name === 'f_password'){
            var pattern = /^[a-zA-Z]\w{3,14}$/
        }else if (inputName.name === 'f_ssn'){
            var pattern = /^\d{3}-\d{2}-\d{4}$/
        }



        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

    button.onclick = myform.onsubmit;

})();  // end wrapper



