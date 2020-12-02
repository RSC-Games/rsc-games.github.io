if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=admin') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        // document.cookie = "pro=true";
        // document.cookie = "proRegistered=false";
        // document.cookie = "registerPro=true"; 
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=deenie') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        document.cookie = "pro=true";
        document.cookie = "proRegistered=false";
        document.cookie = "registerPro=true";
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=isaac') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        // document.cookie = "pro=true";
        // document.cookie = "proRegistered=false";
        // document.cookie = "registerPro=true";
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=ethan') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        // document.cookie = "pro=true";
        // document.cookie = "proRegistered=false";
        // document.cookie = "registerPro=true";
    }
}

else
{
    window.location.replace("login.html");
}

function logout()
{
    document.cookie = "u=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "p=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "size=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "pro=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "proRegistered=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "registerPro=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.replace("login.html");
    
}