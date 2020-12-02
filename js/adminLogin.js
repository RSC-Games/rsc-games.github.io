ar username = ReadCookie("user");
var sessionID = ReadCookie("sessionID");
var uID = ReadCookie("uID"); 

console.log(username + "  " + sessionID + "  " + uID);

var validSession = ValidateUser(sessionID, uID, username);





var attempt = 2;
alert("Alert! If you continue and you are not the site admin, you are HACKING and can be criminally charged.")
// Variable to count number of attempts.
// Below function executes on click of login button.
function validate(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;

    // alert ("Login successfully");
    event.preventDefault();
    document.cookie = "uname=" + username;
    document.cookie = "psw=" + password;
    window.location.replace("validate.html"); // Redirecting to other page.


    if (false) {
        event.preventDefault();
        attempt --;// Decrementing by one.
        alert("Incorrect password. Try again.");
    // Disabling fields after 5 attempts.
        if( attempt == 0){
            document.getElementById("uname").disabled = true;
            document.getElementById("psw").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
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
	return validID;
    }
    else
    {
	window.location.replace("login.html");
    }
    return validID;
}





















// $(document).ready(function(){
//     $("#loginClient").click(function(event){
//       event.preventDefault();
//       window.location = "content.html";
//     });
// });