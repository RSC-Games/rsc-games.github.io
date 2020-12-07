var username = ReadCookie("user");
var sessionID = ReadCookie("sessionID");
var uID = ReadCookie("uID");
var pin = 0; //pin will be stored in a cookie maybe. 

console.log(username + "  " + sessionID + "  " + uID);

var validSession = ValidateUser(sessionID, uID, username);




// Temporary Compatibility Mode
if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=admin') >= 0 
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        window.location.replace("cgfh8945909090r038490ujfajcd0joie99e.html");
    }
}

if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=deenie') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        window.location.replace("489789duirtwu89q893hui89uq789e789893.html");
    }
}

if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=isaac') >= 0
})) {
    if (true)
    {
        window.location.replace("d90es5uo34igf909qu390e788fjtqpd8g0fu.html");
    }
    
}

if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=ethan') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        window.location.replace("vhdjfoeiwjreoijrlej489574hhkeljfldjl.html");
    }
}



// Below function executes on click of login button.
function validate(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    // alert ("Login successfully");
    event.preventDefault();
    document.cookie = "uname=" + username;
    document.cookie = "psw=" + password;
    window.location.replace("validate.html"); // Redirecting to other page.
// Disabling fields after 5 attempts.
    if(false){
        document.getElementById("uname").disabled = true;
        document.getElementById("psw").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
}



//This reads cookies for the authentication process.
function ReadCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    var c;
    for(var i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return c;
}


function ValidateUser(session, userID, username) {
    var validID = false;
    var IDcode = "";
    
    for (var i = 0; i < userID.length; i++)
    {
        var code = userID.charCodeAt(i) + "";
        if (code.length == 1)
        {
            code = "00" + code;
        }
        else if (code.length == 2)
        {
            code = "0" + code;
        }
        else {}
        IDcode = IDcode + code;
    }
    
    if (IDcode.includes(session) && IDcode.length == session.length)
    {
        validID = true;
        console.log("Session ID is valid. Browse may continue.");
    }
    return validID;
}