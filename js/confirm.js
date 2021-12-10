var idpsw = "131132129115";
var rapsw = "077123118118127076111121110055063060055042";
var ispsw = "052053056059058055054057";
var etpsw = "092112109078116105117113118111091115125116116059062056";
var adpsw = "055054072123104104114107042071106115111116085116114127039039";

var uno = Math.floor((Math.random() * 10) + 1);
var dos = Math.floor((Math.random() * 5) + 1);
var tres = Math.floor((Math.random() * 9999) + 99);
var quatro = Math.floor((Math.random() * 99999) + 9);
var cinco;


if (document.cookie.split(';').some(function(item) {
    return item.indexOf('uname=admin') >= 0
})) {
    cinco = 6;
    var passcode = ParsePassword();
    var hashCode = HashCode(rapsw);
    var adminHash = HashCode(adpsw);
    
    if (passcode.includes(adminHash) && passcode.length == adminHash.length)
    {
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.replace("https://codehs.com/sandbox/bubblepuppy/rscinc.com");
    }
    
    else if (passcode.includes(hashCode) && passcode.length == hashCode.length)
    {
        document.cookie = "sessionID=" + KeyGen("admin");
        document.cookie = "u=admin";
        document.cookie = "user=" + ReadCookie();
        document.cookie = "p=active";
        console.log("Alert! You are using a depreciated cookie (p=) that will be replaced in a future update.");
        document.cookie = "pro=true";
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('pro=true') >= 0
        })) {
            document.cookie = "registerPro=true";
            document.cookie = "proRegistered=false";
            document.cookie = "registerPro=false";
            document.cookie = "proRegistered=true";
        }
        window.location.replace("cgfh8945909090r038490ujfajcd0joie99e.html");
    }
    else
    {
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.replace("login.html");
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('uname=deenie') >= 0
})) {
    cinco = 15;
    var passcode = ParsePassword();
    var hashCode = HashCode(idpsw);
    
    if (passcode.includes(hashCode) && passcode.length == hashCode.length)
    {
        document.cookie = "u=deenie";
        document.cookie = "p=active";
        console.log("Alert! You are using a depreciated cookie (p=) that will be replaced in a future update.");
        document.cookie = "pro=true";
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('pro=true') >= 0
        })) {
            //document.cookie = "registerPro=true";
            document.cookie = "proRegistered=false";
            document.cookie = "registerPro=false";
            //document.cookie = "proRegistered=true";
        }
        window.location.replace("489789duirtwu89q893hui89uq789e789893.html");
    }
    else
    {
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.replace("login.html");
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('uname=isaac') >= 0
})) {
    cinco = 3;
    var passcode = ParsePassword();
    var hashCode = HashCode(ispsw);
    
    if (passcode.includes(hashCode) && passcode.length == hashCode.length)
    {
        document.cookie = "u=isaac";
        document.cookie = "p=active";
        console.log("Alert! You are using a depreciated cookie (p=) that will be replaced in a future update.");
        document.cookie = "pro=true";
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('pro=true') >= 0
        })) {
            document.cookie = "registerPro=true";
            document.cookie = "proRegistered=false";
            // document.cookie = "registerPro=false";
            // document.cookie = "proRegistered=true";
        }
        window.location.replace("d90es5uo34igf909qu390e788fjtqpd8g0fu.html");
    }
    else
    {
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.replace("login.html");
    }
    
}

if (document.cookie.split(';').some(function(item) {
    return item.indexOf('uname=ltlevl') >= 0
})) {
    cinco = 8;
    var passcode = ParsePassword();
    var hashCode = HashCode(etpsw);
    
    if (passcode.includes(hashCode) && passcode.length == hashCode.length)
    {
        document.cookie = "sessionID=" + KeyGen("ltlevl");
        document.cookie = "u=ltlevl";
        document.cookie = "user=ltlevl";
        document.cookie = "p=active";
        console.log("Alert! You are using a depreciated cookie (p=) that will be replaced in a future update.");
        document.cookie = "pro=true";
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('pro=true') >= 0
        })) {
            document.cookie = "registerPro=true";
            document.cookie = "proRegistered=false";
            // document.cookie = "registerPro=false";
            // document.cookie = "proRegistered=true";
        }
        window.location.replace("vhdjfoeiwjreoijrlej489574hhkeljfldjl.html");
    }
    else
    {
        document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.replace("login.html");
    }
}


else
{
    document.cookie = "uname=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "psw=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.replace("login.html");
}



function ParsePassword() {
    var psw = ReadCookie("psw");
    var hash = "";
    var code = 0;
    
    for (var i = 0; i < psw.length; i++) {
        code = cinco + psw.charCodeAt(i) + "";
        if (code.length == 1)
        {
            code = "00" + code;
        }
        else if (code.length == 2)
        {
            code = "0" + code;
        }
        else {}
        hash = hash + code;
    }
    console.log(hash);
    hash *= uno;
    hash -= quatro;
    hash /= dos;
    hash += tres;
    hash = hash + "";
    console.log(hash);
    return hash;
}

function HashCode(hash) {
    hash *= uno;
    hash -= quatro;
    hash /= dos;
    hash += tres;
    hash = hash + "";
    console.log(hash);
    return hash;
}

function KeyGen(username) {
    var i = 0;
    var output = "";
    var cookieVal = username;
    var code = 0;
    for (var j = 0; j < username.length; j++)
    {
        code = username.charCodeAt(j) + "";
        if (code.length == 1)
        {
            code = "00" + code;
        }
        else if (code.length == 2)
        {
            code = "0" + code;
        }
        else {}
        output = output + code;
        i++;
    }
    for (var k = i; k < 32; k++)
    {
        var randChar = Math.floor((Math.random() * 50) + 60);
        var char = String.fromCharCode(randChar);
        randChar = randChar + "";
        if (randChar.length == 1)
        {
            randChar = "00" + randChar;
        }
        else if (randChar.length == 2)
        {
            randChar = "0" + randChar;
        }
        else {}
        cookieVal = cookieVal + char;
        output = output + randChar + "";
    }
    document.cookie = "uID=" + cookieVal;
    return output;
    
}

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
