let incercari = 0;

function disable_images() {
    document.getElementById("rosu").style.pointerEvents = "none";
    document.getElementById("galben").style.pointerEvents = "none";
    document.getElementById("verde").style.pointerEvents = "none";
}

function enable_images() {
    document.getElementById("rosu").style.pointerEvents = "auto";
    document.getElementById("galben").style.pointerEvents = "auto";
    document.getElementById("verde").style.pointerEvents = "auto";
}

function initialize() {
    document.getElementById("sound").style.display = "block";
    disable_images();

    let audio = new Audio('./activity4.m4a');
    audio.play().then(function() {

        setTimeout(function() {
            document.getElementById("sound").style.display = "none";
            enable_images();

        }, 19000);
    });
}

function click_semafor(culoare) {
    switch (culoare) {
        case 'rosu':
            wrong_answer();
            break;
        case 'galben':
            wrong_answer();
            break;
        case 'verde':
            right_answer();
            break;
        default:
            break;
    }
}

function wrong_answer() {
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentSymbol + '_Activity3_isAtSecondTry');
    document.getElementById("sound").style.display = "block";
    disable_images();

    let audio = new Audio('./activity4_try_again.m4a');
    audio.play().then(function() {

        setTimeout(function() {
            incercari++;

            if (isAtSecondTry === "true") {
                // if it is wrong also at the final attempt just go to next activity
                window.location.href = "../blue_activity5/index.html";
            }

            if (incercari === 3) {
                // 0 puncte, activitatea va fi reluata la final
                localStorage.setItem(currentSymbol + '_Activity4', '0');
                localStorage.setItem(currentSymbol + '_Activity4_isAtSecondTry', "true");

                window.location.href = "../blue_activity5/index.html";
            } else {
                localStorage.setItem(currentSymbol + '_Activity4_isAtSecondTry', "false");
                document.getElementById("sound").style.display = "none";
                enable_images();
            }
        }, 6000);
    });
}

function right_answer() {
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentSymbol + '_Activity4_isAtSecondTry');

    document.getElementById("sound").style.display = "block";
    disable_images();
    document.getElementById('barometru').src = 'ROGV.png';

    let audio3 = new Audio('./activity4_success.m4a');
    audio3.play().then(function() {

        if (isAtSecondTry === "true")
            localStorage.setItem(currentSymbol + '_Activity4', '5');
        else
            localStorage.setItem(currentSymbol + '_Activity4', '9');

        setTimeout(function() {
            window.location.href = "../blue_activity5/index.html";
        }, 4000);
    });
}