function initialize() {
    document.getElementById("cifra2").disabled = true;
    document.getElementById("cifra3").disabled = true;
    document.getElementById("cifra4").disabled = true;

    document.getElementById("sound").style.display = "block";

    let audio = new Audio('recording_test.mp3');
    audio.muted = true;
    audio.play().then(function() {
        audio.muted = false;
        setTimeout(function() {
            document.getElementById("sound").style.display = "none";

            document.getElementById("cifra2").disabled = false;
            document.getElementById("cifra3").disabled = false;
            document.getElementById("cifra4").disabled = false;
        }, 5500);
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
    // TODO: mesaj audio: numarul de girafe nu este corect
    let audio = new Audio('mai-incearca-Cori.mp3');
    audio.play().then(function() {
        incercari++;
        if (incercari == 3) {
            // TODO: mesaj audio: din pacate nu ai raspuns corect, vom reveni mai tarziu
            let audio = new Audio('mai-incearca-Cori.mp3');
            audio.play().then(function() {
                let currentSymbol = localStorage.getItem('CurrentSymbol');
                // 0 puncte, activitatea va fi reluata la final
                localStorage.setItem(currentSymbol + '_Activity1', '0');
                window.location.href = "../orange_activity2/index.html"
            });
        }
    });
}

function right_answer() {
    document.getElementById('barometer_pencil_img').src = 'red_pencil_removedback_1.png';

    // TODO: mesaj audio: felicitari, numarul de girafe este corect
    // ai completat activitatea, prin urmare creionul barometru s-a completat cu culoarea rosie
    let audio3 = new Audio('bravo-Cori.mp3');
    audio3.play().then(function() {
        let currentSymbol = localStorage.getItem('CurrentSymbol');
        // set number of points for this activity
        localStorage.setItem(currentSymbol + '_Activity1', '4');

        setTimeout(function() {
            window.location.href = "../orange_activity2/index.html";
        }, 3000);
    });
}