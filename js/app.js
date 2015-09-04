//Problem: hints are shown even when form is valid
//Solution: hide and show them at appropriate times

var $password = $('#password');
var $confirmPassword = $('#confirm_password');

//hide hints
$('form span').hide();

function isPasswordValid() {
    return $password.val().length > 8;
}

function arePasswordsMatching() {
    return $confirmPassword.val() === $password.val()
}

function passwordEvent() {
    //find out if password is valid
    if (isPasswordValid) {
        //hide hint if valid
        $password.next().hide();
    } else {
        $password.next().show();
        //else show hint
    }
}

function confirmPasswordEvent() {
    if (arePasswordsMatching) {
        //hide hint if valid
        $confirmPassword.next().hide();
    } else {
        $confirmPassword.next().show();
        //else show hint
    }
}

//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


//when event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
    //find out if password and confirmation match
        //hide hint if matched
        //else show hint