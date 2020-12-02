var message = "Log In";
var color = "";
var spacer = "";
var image = "";
var defaultImage = '<img align = "left" height = "22px" src = "images/favicon.ico"/>';

if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=admin') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
        return item.indexOf('username=') >= 0
        })) {
            message = ReadCookie("username");
        }
        else
        {
            message = "Admin";
        }
        color = 'class = "login"';
        spacer = "<font color = green>_</font>";
        image = '<img align = "left" height = "22px" src="images/RSC_Raine.gif"/></a>';
        

	//document.write('<div class="dropdown"><button class="dropbtn">Admin<i class="fa fa-caret-down"></i>
	//</button><div class="dropdown-content"><a href="favicon.ico">Profile</a>
	//<a href="#">Settings</a></a><a href="#">Log Out</a></div></div>');
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=deenie') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
        return item.indexOf('username=') >= 0
        })) {
            message = ReadCookie("username");
        }
        else
        {
            message = "Deenie";
        }
        color = 'class = "login"';
        spacer = "<font color = green>_</font>";
        image = '<img align = "left" height = "22px" src="images/RSC_Iden.png"/></a>';
        
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=isaac') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
        return item.indexOf('username=') >= 0
        })) {
            message = ReadCookie("username");
        }
        else
        {
            message = "Isaac";
        }
        color = 'class = "login"';
        spacer = "<font color = green>_</font>";
        image = '<img align = "left" height = "22px" src="images/RSC_Isaac.jfif"/></a>';
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=ethan') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
        return item.indexOf('username=') >= 0
        })) {
            message = ReadCookie("username");
        }
        else
        {
            message = "Ethan";
        }
        color = 'class = "login"';
        spacer = "<font color = green>_</font>";
        image = '<img align = "left" height = "22px" src="images/favicon.ico"/></a>';
        // document.write('<div class="dropdown"><button class="dropbtn">Admin<i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="cgfh8945909090r038490ujfajcd0joie99e.html">Profile</a><a href="#">Settings</a></a><a href="#">Log Out</a></div></div>');
    }
}

document.write('<a align = "left"' + color + ' href = "login.html">' + spacer + message + image + '</a>');



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