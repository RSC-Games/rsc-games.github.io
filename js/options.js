var username = ReadCookie("user");
var sessionID = ReadCookie("sessionID");
var uID = ReadCookie("uID"); 

console.log(username + "  " + sessionID + "  " + uID);

var validSession = ValidateUser(sessionID, uID, username);



// Variable to count number of attempts.
// Below function Executes on click of login button.
function save(){
    var darkTheme = document.getElementById("Dtheme"); // .value;
    var lightTheme = document.getElementById("Ltheme");  // .value;
    // alert ("Login successfully");
    event.preventDefault();
    
    if (lightTheme.checked)
    {
        document.cookie = "theme=light";
        console.log("Light Theme");
    }
    else
    {
        document.cookie = "theme=dark";
        console.log("Dark Theme");
    }
    document.getElementById("saved").innerHTML = "Your changes have been saved.";
    setTimeout() => {  document.getElementById("saved").innerHTML = "";; }, 2000);
}

function savePro(){
    var sp = document.getElementById("smartphone"); // .value;
    var ls = document.getElementById("smallLaptop");
    var lb = document.getElementById("largeLaptop");// .value;
    var pc = document.getElementById("pc");
    var username = document.getElementById("uname").value;
    event.preventDefault();
    
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('pro=true') >= 0
    })) {
        if (sp.checked)
        {
            // document.cookie = "size=300";
            // console.log("Smartphone Compatibility Enabled");
        }
        else if (lb.checked)
        {
            document.cookie = "size=800";
            console.log("Large Laptop Compatibility Enabled");
        }
        else if (pc.checked)
        {
            document.cookie = "size=1000";
            console.log("PC Compatibility Enabled");
        }
        else
        {
            document.cookie = "size=600";
            console.log("Small Laptop Compatibility Enabled");
        }
        
        if (username != "")
        {
            document.cookie = "username=" + username;
            console.log("Username Set");
        }
        else
        {
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            console.log("Username Removed. Using Default Username.");
        }
        document.getElementById("prosaved").innerHTML = "Your changes have been saved.";
        setTimeout(() => {  document.getElementById("prosaved").innerHTML = "";; }, 2000);
    }
    else
    {
        document.getElementById("smartphone").disabled = true;
        document.getElementById("smallLaptop").disabled = true;
        document.getElementById("largeLaptop").disabled = true;
        document.getElementById("pc").disabled = true;
        document.getElementById("uname").disabled = true;
        document.getElementById("submit").disabled = true;
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