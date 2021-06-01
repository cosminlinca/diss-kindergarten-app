function disable_images() {
    document.getElementById("cifra2").style.pointerEvents = "none";
    document.getElementById("cifra3").style.pointerEvents = "none";
    document.getElementById("cifra4").style.pointerEvents = "none";
}

function enable_images() {
    document.getElementById("cifra2").style.pointerEvents = "auto";
    document.getElementById("cifra3").style.pointerEvents = "auto";
    document.getElementById("cifra4").style.pointerEvents = "auto";
}

function check_activity_skip() {
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity1_isAtSecondTry');
    let points = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity1');

    if (isAtSecondTry == "true" && points != '0')
        window.location.href = "../orange_activity2/index.html";
}

function initialize() {
    check_activity_skip();

    document.getElementById("cifra2").style.pointerEvents = "none";
    document.getElementById("cifra3").style.pointerEvents = "none";
    document.getElementById("cifra4").style.pointerEvents = "none";

    document.getElementById("sound").style.display = "block";

    let audio = new Audio('red_activity_initialize.mp3');
    audio.muted = true;
    audio.play().then(function() {
        audio.muted = false;
        setTimeout(function() {
            document.getElementById("sound").style.display = "none";

            document.getElementById("cifra2").style.pointerEvents = "auto";
            document.getElementById("cifra3").style.pointerEvents = "auto";
            document.getElementById("cifra4").style.pointerEvents = "auto";
        }, 12000);
    });
}


let incercari = 0;

function click_cifra(cifra) {
    switch (cifra) {
        case 'cifra_2':
            wrong_answer();
            break;
        case 'cifra_3':
            right_answer();
            break;
        case 'cifra_4':
            wrong_answer();
            break;
        default:
            break;
    }
}

function wrong_answer() {
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup + "_" + currentSymbol + '_Activity1_isAtSecondTry');

    document.getElementById("sound").style.display = "block";
    disable_images();

    incercari++;

    let audio_name, timeout;

    if (isAtSecondTry == "true" || incercari === 3) {
        audio_name = 'red_activity_wrong_final.mp3';
        timeout = 7500;
    } else {
        audio_name = 'red_activity_wrongAnswer.mp3';
        timeout = 8000;
    }

    let audio = new Audio(audio_name);
    audio.play().then(function() {

        setTimeout(function() {

            if (isAtSecondTry == "true") {
                // if it is wrong also at the final attempt just go to next activity
                window.location.href = "../orange_activity2/index.html";
            }

            if (incercari === 3) {
                // 0 puncte, activitatea va fi reluata la final
                localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity1', '0');
                localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity1_isAtSecondTry', "true");

                window.location.href = "../orange_activity2/index.html";
            } else {
                localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity1_isAtSecondTry', "false");
                document.getElementById("sound").style.display = "none";
                enable_images();
            }
        }, timeout);
    });
}

function right_answer() {
    document.getElementById('barometer_pencil_img').src = 'red_pencil_removedback_1.png';

    document.getElementById("sound").style.display = "block";

    let audio3 = new Audio('red_activity_final.mp3');
    audio3.play().then(function() {
        let currentGroup = localStorage.getItem('CurrentGroup');
        let currentSymbol = localStorage.getItem('CurrentSymbol');
        let isAtSecondTry = localStorage.getItem(currentGroup + "_" + currentSymbol + '_Activity1_isAtSecondTry');

        if (isAtSecondTry == "true") {
            // set number of points for this activity
            localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity1', '5');
        } else {
            localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity1', '9');
        }

        localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity1_isAtSecondTry', "true");

        setTimeout(function() {
            window.location.href = "../orange_activity2/index.html";
        }, 7000);
    });
}