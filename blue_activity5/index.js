let trials = 0;

function disable_elements() {
    document.getElementById("cow").style.pointerEvents = "none";
    document.getElementById("dog").style.pointerEvents = "none";
    document.getElementById("rooster").style.pointerEvents = "none";
    document.getElementById("sound_cow").style.pointerEvents = "none";
    document.getElementById("sound_dog").style.pointerEvents = "none";
    document.getElementById("sound_rooster").style.pointerEvents = "none";
}

function enable_elements() {
    document.getElementById("cow").style.pointerEvents = "auto";
    document.getElementById("dog").style.pointerEvents = "auto";
    document.getElementById("rooster").style.pointerEvents = "auto";
    document.getElementById("sound_cow").style.pointerEvents = "auto";
    document.getElementById("sound_dog").style.pointerEvents = "auto";
    document.getElementById("sound_rooster").style.pointerEvents = "auto";
}

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

function initialize() {
    disable_elements();
    document.getElementById("voice-sound").style.display = "block";

    let audio = new Audio('story.mp4');
    audio.muted = true;
    audio.play().then(function () {
        audio.muted = false;
        setTimeout(function () {
            document.getElementById("voice-sound").style.display = "none";
            enable_elements();
        }, 29500);
    });
}

function onAnimalClick(id) {
    trials += 1;
    document.getElementById("voice-sound").style.display = "block";
    disable_elements();

    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity5_isAtSecondTry');

    if (id === 'dog') {
        document.getElementById('barometru').src = 'ROGVA.png';
        let audio = new Audio('success.mp4');
        audio.play().then(function () {

            if (isAtSecondTry === "true")
            // Second try => 5 points
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity5', '5');
            else
            // First try => 9 points
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity5', '9');

            setTimeout(function () {
                window.location.href = "../dark_blue_activity6/index.html";
            }, 2000);
        });
    } else {

        if (isAtSecondTry === "true") {
            let audio = new Audio('last_trial.mp4');
            audio.play().then(function () {
                setTimeout(function () {
                    window.location.href = "../dark_blue_activity6/index.html";
                }, 4500);
            });
        } else {
            if (trials >= 3) {
                trial = 0;

                let audio = new Audio('try_again_later.mp4');
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity5', '0');
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity5_isAtSecondTry', "true");

                audio.play().then(function () {
                    setTimeout(function () {
                        window.location.href = "../dark_blue_activity6/index.html";
                    }, 4500);
                });

            } else {
                let audio = new Audio('wrong.mp4');
                audio.play().then(function () {
                    setTimeout(function () {
                        document.getElementById("voice-sound").style.display = "none";
                        enable_elements();
                    }, 3000);
                });
            }
        }
    }
}
