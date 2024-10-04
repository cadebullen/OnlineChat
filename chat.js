var passwordRE = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@.|`~<>()#^*+=\/\-\[\]$!%*?&]).{0,30}$/; //not used but is the whole password regex
var regexNum = /(?=.*\d)/;
var regexUppercaseLetters = /(?=.*[A-Z])/;
var regexSpecialChar = /(?=.*[@.|`~<>()#^*+=\/\-\[\]$!%*?&])/;

// Check if password is empty:
if (!document.getElementById("password").value) {
    alert("Please enter a password.");
    document.getElementById("password").focus();
    document.getElementById("password").select();
    return false;
}
else { // Check value of password to its regex
    let pw = document.getElementById("password").value;
    if (pw.length > 30) {
        alert("Password exceeds the maximum of 30 characters.");
        document.getElementById("password").focus();
        document.getElementById("password").select();
        return false;
    }
    else if (pw.search(regexNum) == -1) {
        alert("Password does not contain a number.");
        document.getElementById("password").focus();
        document.getElementById("password").select();
        return false;
    }
    else if (pw.search(regexUppercaseLetters) == -1) {
        alert("Password does not contain an uppercase letter.");
        document.getElementById("password").focus();
        document.getElementById("password").select();
        return false;
    }
    else if (pw.search(regexSpecialChar) == -1) {
        alert("Password does not contain a special character.");
        document.getElementById("password").focus();
        document.getElementById("password").select();
        return false;
    }

}

// Check if password is empty:
if (!document.getElementById("newPassword").value) {
    alert("Please enter a password.");
    document.getElementById("newPassword").focus();
    document.getElementById("newPassword").select();
    return false;
}
else { // Check value of password to its regex
    let pw = document.getElementById("newPassword").value;
    if (pw.length > 30) {
        alert("Password exceeds the maximum of 30 characters.");
        document.getElementById("newPassword").focus();
        document.getElementById("newPassword").select();
        return false;
    }
    else if (pw.length < 6) {
        alert("Password cannot be less than 6 characters.0");
        document.getElementById("newPassword").focus()
        document.getElementById("newPassword").select()
        return false;
    }
    else if (pw.search(regexNum) == -1) {
        alert("Password does not contain a number.");
        document.getElementById("newPassword").focus();
        document.getElementById("newPassword").select();
        return false;
    }
    else if (pw.search(regexUppercaseLetters) == -1) {
        alert("Password does not contain an uppercase letter.");
        document.getElementById("newPassword").focus();
        document.getElementById("newPassword").select();
        return false;
    }
    else if (pw.search(regexSpecialChar) == -1) {
        alert("Password does not contain a special character.");
        document.getElementById("newPassword").focus();
        document.getElementById("newPassword").select();
        return false;
    }

}