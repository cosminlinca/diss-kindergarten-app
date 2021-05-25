let trials = 0;

function playCowSound() {
    let cowSound = new Audio('cow_sound.mp3');
    cowSound.play();
}

function playRoosterSound() {
    let roosterSound = new Audio('rooster_sound.mp3');
    roosterSound.play();
}

function playWrongSound() {
    let catSound = new Audio('cat_sound.mp3');
    catSound.play();
}

function onAnimalClick(id) {
    trials += 1;
    // TODO: block page elements while audio is playing in both cases

    if (id === 'dog') {
        document.getElementById('barometru').src = 'ROGVA.png';
        // TODO: mesaj audio succes
        let audio = new Audio('.mp3');
        audio.play().then(function () {
            let currentSymbol = localStorage.getItem('CurrentSymbol');
            // set number of points for this activity
            localStorage.setItem(currentSymbol + '_Activity5', '2');
            window.location.href = "../indigo_activity6/index.html";
        });
    } else {
        if (trials >= 3) {
            // TODO: mesaj audio negativ
            let audio = new Audio('.mp3');
            audio.play().then(function () {
                let currentSymbol = localStorage.getItem('CurrentSymbol');
                // 0 puncte, activitatea va fi reluata la final
                localStorage.setItem(currentSymbol + '_Activity5', '0');
                window.location.href = "../indigo_activity6/index.html";
            });
        }
    }
}
