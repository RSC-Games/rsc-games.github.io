var idkey = 328445384 * 12;
// var idkey;
// var iskey = 3985345733 * 7;
var iskey;
// var rakey = 840385409 * 15;
var rakey;
var etkey = 904850382 * 5;
// var etkey;
var attempt = 5;

function validate(){
    var productKey = document.getElementById("pk").value;
    // alert ("Login successfully");\
    event.preventDefault();
    if (productKey == rakey && document.cookie.split(';').some(function(item) {return item.indexOf('u=admin') >= 0}))
    {
        document.getElementById("complete").innerHTML = "<a href = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Pro+Has+Been+Registered!&to=bubblepuppy2017@gmail.com&body=I+Have+Registered+Pro!+Press+send+to+complete+transaction.'>Complete Registration</a>";
        document.cookie = "registerPro=false";
        document.cookie = "proRegistered=true";
    }
    else if (productKey == idkey && document.cookie.split(';').some(function(item) {return item.indexOf('u=deenie') >= 0}))
    {
        document.getElementById("complete").innerHTML = "<a href = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Pro+Has+Been+Registered!&to=bubblepuppy2017@gmail.com&body=I+Have+Registered+Pro!+Press+send+to+complete+transaction.'>Complete Registration</a>";
        document.cookie = "registerPro=false";
        document.cookie = "proRegistered=true";
    }
    else if (productKey == iskey && document.cookie.split(';').some(function(item) {return item.indexOf('u=isaac') >= 0}))
    {
        document.getElementById("complete").innerHTML = "<a href = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Pro+Has+Been+Registered!&to=bubblepuppy2017@gmail.com&body=I+Have+Registered+Pro!+Press+send+to+complete+transaction.'>Complete Registration</a>";
        document.cookie = "registerPro=false";
        document.cookie = "proRegistered=true";
    }
    else if (productKey == etkey && document.cookie.split(';').some(function(item) {return item.indexOf('u=ethan') >= 0}))
    {
        document.getElementById("complete").innerHTML = "<a href = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Pro+Has+Been+Registered!&to=bubblepuppy2017@gmail.com&body=I+Have+Registered+Pro!+Press+send+to+complete+transaction.'>Complete Registration</a>";
        document.cookie = "registerPro=false";
        document.cookie = "proRegistered=true";
    }
    
    else
    {
        document.getElementById("complete").innerHTML = "Incorrect Product Key.";
        setTimeout(() => {  document.getElementById("complete").innerHTML = ""; }, 1500);
        attempt--;
    }
// Disabling fields after 5 attempts.
    if(attempt == 0){
        document.getElementById("pk").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
}


// document.getElementById("pro").innerHTML = '<center><font color = "blue"><a href = "registerPro.html">Register Pro here.</a></font></center>';













// $(document).ready(function(){
//     $("#loginClient").click(function(event){
//       event.preventDefault();
//       window.location = "content.html";
//     });
// });