function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
        document.getElementById("cname").value = user;
    } else {
        user = document.getElementById("cname").value;
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }

    let cardno = getCookie("cardnumber");
    if (cardno != "") {
        alert("your card number is " + cardno);
        document.getElementById("ccnum").value = cardno;
    } else {
        cardno = document.getElementById("ccnum").value;
        if (cardno != "" && cardno != null) {
            setCookie("cardnumber", cardno, 30);
        }
    }

    let favColor = getCookie("colorname");
    if (favColor != "") {
        alert("your fav color is " + favColor);
        document.bgColor = favColor;
    } else {
        favColor = prompt("Please enter your fav color:", "");
        if (favColor != "" && favColor != null) {
            setCookie("colorname", favColor, 30);
        }
    }

    let paymentStatus = getCookie("Pstatus")
    if(paymentStatus)
    {
        document.getElementById("status").src="images/2.jpg"
    }

}

function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    alert("Cookie Deleted");
}
function deleteColorCookie() {
    document.cookie = "colorname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    alert("Color Cookie Deleted");
}

function deleteCardNumber() {
    document.cookie = "cardnumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    alert("CardNumber Cookie Deleted");
}

function deleteStatus() {
    document.cookie = "Pstatus=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    alert("Payment Status Cookie Deleted");
}

function setExpiryCnameCookie() {
    date = prompt("Enter Expiry date in this format [July 1, 1999]", "");
    const exdate = new Date(date);
    exdate.setTime(exdate.getTime());
    user = getCookie("username");
    alert("Name Cookie expiry set to: " + exdate)
    function setCookie(cname, cvalue, exdate) {
        document.cookie = cname + "=" + cvalue + ";" + exdate + ";path=/";
    }
    setCookie("username", user, exdate);
}

function setExpiryCnumCookie() {
    date = prompt("Enter Expiry date in this format [July 1, 1999]", "");
    const exdate = new Date(date);
    exdate.setTime(exdate.getTime());
    user = getCookie("cardnumber");
    alert("Name Cookie expiry set to: " + exdate)
    function setCookie(cname, cvalue, exdate) {
        document.cookie = cname + "=" + cvalue + ";" + exdate + ";path=/";
    }
    setCookie("cardnumber", user, exdate);

}
var Pstatus = false
function setStatus()
{
    Pstatus = true
    cname = "Pstatus"
    document.cookie = cname + "=" + Pstatus + ";"  + ";path=/";
}