if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=admin') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('theme=light') >= 0
    })) {
        document.write('<link type = "text/css" rel = "stylesheet" href = "css/LightTheme.css">');
    }
    else
    {
        document.write('<link type = "text/css" rel = "stylesheet" href = "css/RSC_Inc.css">');
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=deenie') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('theme=light') >= 0
    })) {
        document.write('<link type = "text/css" rel = "stylesheet" href = "css/LightTheme.css">');
    }
    else
    {
        document.write('<link type = "text/css" rel = "stylesheet" href = "css/RSC_Inc.css">');
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=isaac') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('theme=light') >= 0
    })) {
        document.write('<link type = "text/css" rel = "stylesheet" href = "css/LightTheme.css">');
    }
    else
    {
        document.write('<link type = "text/css" rel = "stylesheet" href = "css/RSC_Inc.css">');
    }
}

else if (document.cookie.split(';').some(function(item) {
    return item.indexOf('u=ethan') >= 0
})) {
    if (document.cookie.split(';').some(function(item) {
        return item.indexOf('theme=light') >= 0
    })) {
        document.write('<link type = "text/css" rel = "stylesheet" href = "css/LightTheme.css">');
    }
    else
    {
        document.write('<link type = "text/css" rel = "stylesheet" href = "css/RSC_Inc.css">');
    }
}

else
{
    document.write('<link type = "text/css" rel = "stylesheet" href = "css/RSC_Inc.css">');
}