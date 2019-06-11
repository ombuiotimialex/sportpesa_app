let loginHtml = document.getElementById("login.html").value;
let betHtml = document.getElementById("bet.html").value;
loginHtml.style.visibility = "visible";
betHtml.style.visibility = "hidden";

function login() {

    var userNumber = document.getElementById("phone number").value;
    var pin = document.getElementById("pin").value;
    if (userNumber == +254702800664 && pin == 1664) {

        let loginHtml = document.getElementById("login.html").value;
        let betHtml = document.getElementById("bet.html").value;
        
        loginHtml.style.visibility = "hidden";
        betHtml.style.visibility = "visible";

    } else {
        alert("INVALID PHONE NUMBER OR PIN CODE. ENTER CORRECT DETAILS.");
    }
}