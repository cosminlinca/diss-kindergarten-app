function disable_images() {
    document.getElementById("strumf").style.pointerEvents = "none";
    document.getElementById("buburuza").style.pointerEvents = "none";
    document.getElementById("iepuras").style.pointerEvents = "none";
    document.getElementById("ursulet").style.pointerEvents = "none";
}

function enable_images() {
    document.getElementById("strumf").style.pointerEvents = "auto";
    document.getElementById("buburuza").style.pointerEvents = "auto";
    document.getElementById("iepuras").style.pointerEvents = "auto";
    document.getElementById("ursulet").style.pointerEvents = "auto";
}

function initialize() {
    document.getElementById("sound").style.display = "block";
    disable_images();

    let audio = new Audio('./alege_grupa.m4a');
    audio.play().then(function() {

        setTimeout(function() {
            document.getElementById("sound").style.display = "none";
            enable_images();

        }, 20000);
    });
}

function click_grupa(grupa) {
    switch (grupa) {
        case 'strumf':
            // Get local storage
            localStorage = window.localStorage;
            // Save in local storage
            localStorage.setItem('CurrentGroup', "Strumf");
            // Navigate
            window.location.href = "../login/login.html";
            break;
        case 'buburuza':
            // Get local storage
            localStorage = window.localStorage;
            // Save in local storage
            localStorage.setItem('CurrentGroup', "Buburuza");
            // Navigate
            window.location.href = "../login/login.html";
            break;
        case 'iepuras':
            // Get local storage
            localStorage = window.localStorage;
            // Save in local storage
            localStorage.setItem('CurrentGroup', "Iepuras");
            // Navigate
            window.location.href = "../login/login.html";
            break;
        case 'ursulet':
            // Get local storage
            localStorage = window.localStorage;
            // Save in local storage
            localStorage.setItem('CurrentGroup', "Ursulet");
            // Navigate
            window.location.href = "../login/login.html";
            break;
        default:
            break;
    }
}