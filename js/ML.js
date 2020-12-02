var URL = "https://scratch.mit.edu/projects/309276376/embed";

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





if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=admin') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('proRegistered=true') >= 0
        })) {
            if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=1000') >= 0
            })) {
                oneThousandPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=800') >= 0
            })) {
                eightHundredPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=600') >= 0
            })) {
                sixHundredPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=300') >= 0
            })) {
                threeHundredPX(URL);
            }
            else
            {
                window.location.replace("login.html");
            }
        }
    }
    
    else
    {
        window.location.replace("login.html");
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=deenie') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('proRegistered=true') >= 0
        })) {
            if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=1000') >= 0
            })) {
                oneThousandPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=800') >= 0
            })) {
                eightHundredPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=600') >= 0
            })) {
                sixHundredPX(URL);
            }
            // else if (document.cookie.split(';').some(function(item) {
            //     return item.indexOf('size=300') >= 0
            // })) {
            //     threeHundredPX(URL);
            // }
            else
            {
                window.location.replace("login.html");
            }
        }
    }
    else
    {
        window.location.replace("login.html");
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=isaac') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('proRegistered=true') >= 0
        })) {
            if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=1000') >= 0
            })) {
                oneThousandPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=800') >= 0
            })) {
                eightHundredPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=600') >= 0
            })) {
                sixHundredPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=300') >= 0
            })) {
                threeHundredPX(URL);
            }
            else
            {
                window.location.replace("login.html");
            }
        }
    }
    else
    {
        window.location.replace("login.html");
    }
    
}


else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=ethan') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('p=active') >= 0
    })) {
        if (document.cookie.split(';').some(function(item) {
            return item.indexOf('proRegistered=true') >= 0
        })) {
            if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=1000') >= 0
            })) {
                oneThousandPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=800') >= 0
            })) {
                eightHundredPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=600') >= 0
            })) {
                sixHundredPX(URL);
            }
            else if (document.cookie.split(';').some(function(item) {
                return item.indexOf('size=300') >= 0
            })) {
                threeHundredPX(URL);
            }
            else
            {
                window.location.replace("login.html");
            }
        }
    }
    
    else
    {
        window.location.replace("login.html");
    }
}


else
{
    window.location.replace("login.html");
}