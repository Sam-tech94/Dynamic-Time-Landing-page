// DOM Elements
const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    _name = document.getElementById("name"),
    _focus = document.getElementById("focus");

let showPmAm = true;

// Show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    let pmAm = hour >= 12 ? "PM" : "AM";
    
    // 12hr format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showPmAm ? pmAm : ""}`;

    setTimeout(showTime, 1000);
}    

// Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set background image
function setBgImage() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning

        document.body.style.backgroundImage = "url(../img/morning.jpg)";
        greeting.textContent = "Good Morning ";
    } else if (hour < 18) {
        // Afternoon

        document.body.style.backgroundImage = "url(../img/afternoon.jpg)";
        greeting.textContent = "Good Afternoon ";
        document.body.style.color = "white";
    } else {
        // Night

        document.body.style.backgroundImage = "url(../img/night.jpg)";
        greeting.textContent = "Good Evening ";
        document.body.style.color = "white";
    }    
}

// Get name
function getName() {
    if (localStorage.getItem("name") === null) {
        _name.textContent = "[Enter Name]";
    } else {
        _name.textContent = localStorage.getItem("name");
    }
}

// Set name
function setName(e) {
    if (e.type === "keypress") {
        // make sure enter is presses
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerText);
            _name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

// Get focus
function getFocus() {
    if (localStorage.getItem("focus") === null) {
        _focus.textContent = "[Enter Focus]";
    } else {
        _focus.textContent = localStorage.getItem("focus");
    }
}

// Set focus
function setFocus(e) {
    if (e.type === "keypress") {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            _focus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}


_name.addEventListener("keypress", setName);
_name.addEventListener("blur", setName);
_focus.addEventListener("keypress", setFocus);
_focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgImage();
getName();
getFocus();

