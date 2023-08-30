// Get the modal
var modal = document.getElementById('type_email');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
  
    if(validateEmail(email)){
      $result.text(email + ' is valid.');
      $result.css('color', 'green');
    } else{
      $result.text(email + ' is invalid.');
      $result.css('color', 'red');
    }
    return false;
}
  
$('#email').on('input', validate);

// Validate
const usernameEl = document.querySelector('#username');
const mssv_vali = document.querySelector('#mssv');
const mail_vali = document.querySelector('#email');
const form = document.querySelector('#type_email');
// check username
const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Họ tên không được để trống');
    
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Tối thiểu ${min} kí tự và nhiều nhất ${max} kí tự.`);
       
    } else {
        showSuccess(usernameEl);
        valid = true;
        
    }
    return valid;
};

//check MSSV
const checkMSSV = () => {

    let valid = false;

    const min = 5,
        max = 15;

    const mssv = mssv_vali.value.trim();

    if (!isRequired(mssv)) {
        showError(mssv_vali, 'Mã sô sinh viên không được để trống');
    } else if (!isBetween(mssv.length, min, max)) {
        showError(mssv_vali, `Mã số sinh viên must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(mssv_vali);
        valid = true;
    }
    return valid;
};
// check email
const checkEmail = () => {

    let valid = false;

    const min = 5,
        max = 15;

    const mail = mail_vali.value.trim();

    if (!isRequired(mail)) {
        showError(mail_vali, 'Email không được để trống');
    } else if (!isBetween(mssv.length, min, max)) {
        showError(mail_vali, `Email must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(mail_vali);
        valid = true;
    }
    return valid;
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;



const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername();
    let isMSSVValid = checkMSSV();
    let isMailValid = checkEmail();

    let isFormValid = isUsernameValid &&
    isMSSVValid && isMSSVValid;
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'mssv':
            checkMSSV();
            break;
        case 'email':
            checkEmail();
            break;
       
    }
}));

