//Problem: hints are shown even when form is valid
//Solution: hide and show them at appropriate times

//hide hints
$('form span').hide();

function passwordEvent () {
    //find out if password is valid
    if ($(this).val().length > 8) {
        //hide hint if valid
        $(this).next().hide();
    } else {
        $(this).next().show();
        //else show hint
    }
}

//when event happens on password input
$('#password').focus(passwordEvent).keyup(passwordEvent);


//when event happens on confirmation
    //find out if password and confirmation match
        //hide hint if matched
        //else show hint