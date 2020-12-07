var username = ReadCookie("user");
var sessionID = ReadCookie("sessionID");
var uID = ReadCookie("uID"); 

console.log(username + "  " + sessionID + "  " + uID);

var validSession = ValidateUser(sessionID, uID, username);


var URL = "https://scratch.mit.edu/projects/335245932/embed";

function oneThousandPX(url)
{
    document.write('<center><iframe src = "' + url + '" allowtransparency="true" width="1350px" height="1060px" frameborder="0" scrolling="no" allowfullscreen></iframe></center>');
}

function eightHundredPX(url)
{
    document.write('<center><iframe src = "' + url + '" allowtransparency="true" width="1175px" height="935px" frameborder="0" scrolling="no" allowfullscreen></iframe></center>');
}

function sixHundredPX(url)
{
    document.write('<center><iframe src = "' + url + '" allowtransparency="true" width="930px" height="750px" frameborder="0" scrolling="no" allowfullscreen></iframe></center>');
}

function threeHundredPX(url)
{
    document.write('<center><iframe src = "' + url + '" allowtransparency="true" width="800px" height="300px" frameborder="0" scrolling="no" allowfullscreen></iframe></center>');
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



