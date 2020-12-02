if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=admin') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('pro=true') >= 0
        })) {
            
        }
        else
        {
            document.write('<center><font color = "red"><p> You do not have access to these features. Upgrade to pro to unlock them. </p></font></center>');
        }
    }
    else
    {
        document.write('<center><font color = "red"><p> You do not have access to these features. Upgrade to pro to unlock them. </p></font><button class = "btn purchase" type="pro" id = "pro" name = "pro" onclick = "window.location.href = "RSCGetPro.html";">Get Pro</button></center>');
    }
    
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=deenie') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('pro=true') >= 0
        })) {
            
        }
        else
        {
            document.write("<center><font color = 'red'><p> You do not have access to these features. Upgrade to pro to unlock them. </p></font><button class = 'btn purchase' type='pro' id = 'pro' name = 'pro' onclick = 'window.location.href = 'RSCGetPro.html';'>Get Pro</button></center>");
        }
    }
    else
    {
        document.write("<center><font color = 'red'><p> You do not have access to these features. Upgrade to pro to unlock them. </p></font><button class = 'btn purchase' type='pro' id = 'pro' name = 'pro' onclick = 'window.location.href = 'RSCGetPro.html';'>Get Pro</button></center>");
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=isaac') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('pro=true') >= 0
        })) {
            
        }
        else
        {
            document.write("<center><font color = 'red'><p> You do not have access to these features. Upgrade to pro to unlock them. </p></font><button class = 'btn purchase' type='pro' id = 'pro' name = 'pro' onclick = 'window.location.href = 'RSCGetPro.html';'>Get Pro</button></center>");
        }
    }
    else
    {
        document.write("<center><font color = 'red'><p> You do not have access to these features. Upgrade to pro to unlock them. </p></font><button class = 'btn purchase' type='pro' id = 'pro' name = 'pro' onclick = 'window.location.href = 'RSCGetPro.html';'>Get Pro</button></center>");
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=ethan') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('pro=true') >= 0
        })) {
            
        }
        else
        {
            document.write("<center><font color = 'red'><p> You do not have access to these features. Upgrade to pro to unlock them. </p></font><button class = 'btn purchase' type='pro' id = 'pro' name = 'pro' onclick = 'window.location.href = 'RSCGetPro.html';'>Get Pro</button></center>");
        }
    }
    else
    {
        document.write("<center><font color = 'red'><p> You do not have access to these features. Upgrade to pro to unlock them. </p></font><button class = 'btn purchase' type='pro' id = 'pro' name = 'pro' onclick = 'window.location.href = 'RSCGetPro.html';'>Get Pro</button></center>");
    }
}

else
{
    document.write("<center><font color = 'blue'><p> You are not logged in. </p></font></center>");
}

// <font color = "blue"><center><form id = "login" method="post" name = "loginform">
//     <p></font>.<font color = "blue"></p>
//     <p><strong>Theme:</strong>
//     <input required id="Dtheme" type="radio" name="theme">
//     <label for="Dtheme">Dark Theme</font> ...<font color = "blue"></label>
//     <input required id="Ltheme" type="radio" name="theme">
//     <label for="Ltheme">Light Theme</label>
//     </p>
//     <br />
//     <p></p>
//     <button class = "btn purchase" type="submit" id = "submit" name = "submit" onclick = "savePro()">Save Changes</button>
// </form></center></font>