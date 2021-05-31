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

function initialize() {
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

    let audio = new Audio('red_activity_wrongAnswer.mp3');
    audio.play().then(function() {

        setTimeout(function() {
            incercari++;

            if (isAtSecondTry === "true") {
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
        }, 8000);
    });

    // // TODO: mesaj audio: numarul de girafe nu este corect
    // let audio = new Audio('mai-incearca-Cori.mp3');
    // audio.play().then(function() {
    //     incercari++;
    //     if (incercari == 3) {
    //         // TODO: mesaj audio: din pacate nu ai raspuns corect, vom reveni mai tarziu
    //         let audio = new Audio('mai-incearca-Cori.mp3');
    //         audio.play().then(function() {

    //             // 0 puncte, activitatea va fi reluata la final
    //             localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity1', '0');
    //             window.location.href = "../orange_activity2/index.html"
    //         });
    //     }
    // });
}

function right_answer() {
    document.getElementById('barometer_pencil_img').src = 'red_pencil_removedback_1.png';

    // TODO: mesaj audio: felicitari, numarul de girafe este corect
    // ai completat activitatea, prin urmare creionul barometru s-a completat cu culoarea rosie
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

        setTimeout(function() {
            window.location.href = "../orange_activity2/index.html";
        }, 7000);
    });
}