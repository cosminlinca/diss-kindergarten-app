let incercari = 1;

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

    let audio = new Audio('../red_activity1/recording_test.mp3');
    audio.play().then(function() {

        setTimeout(function() {
            document.getElementById("sound").style.display = "none";
            enable_images();

            // TODO: Replace timeout value with recording duration
        }, 5500);
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
    document.getElementById("sound").style.display = "block";
    disable_images();

    // TODO: Replace recording name
    let audio = new Audio('../red_activity1/mai-incearca-Cori.mp3');
    audio.play().then(function() {

        setTimeout(function() {
            incercari++;
            if (incercari === 3) {
                // TODO: Replace recording name
                let audio = new Audio('../red_activity1/mai-incearca-Cori.mp3');

                audio.play().then(function() {
                    let currentSymbol = localStorage.getItem('CurrentSymbol');
                    // 0 puncte, activitatea va fi reluata la final
                    localStorage.setItem(currentSymbol + '_Activity4', '0');

                    setTimeout(function() {
                        window.location.href = "../violet_activity5/index.html";
                        // TODO: Replace timeout value with recording duration
                    }, 3000);
                });
            } else {
                document.getElementById("sound").style.display = "none";
                enable_images();
            }
            // TODO: Replace timeout value with recording duration
        }, 2000);
    });
}

function right_answer() {
    document.getElementById("sound").style.display = "block";
    disable_images();
    document.getElementById('barometru').src = 'ROGV.png';

    // TODO: replace recording name
    let audio3 = new Audio('../red_activity1/bravo-Cori.mp3');
    audio3.play().then(function() {
        let currentSymbol = localStorage.getItem('CurrentSymbol');
        // set number of points for this activity
        localStorage.setItem(currentSymbol + '_Activity4', '4');

        setTimeout(function() {
            window.location.href = "../violet_activity5/index.html";
            // TODO: Replace timeout value with recording duration
        }, 2000);
    });
}