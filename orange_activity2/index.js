let trial = 0;

function disable_images() {
    document.getElementById("tree").style.pointerEvents = "none";
    document.getElementById("giraffe").style.pointerEvents = "none";
    document.getElementById("monkey").style.pointerEvents = "none";
    document.getElementById("bunny").style.pointerEvents = "none";
    document.getElementById("easter-eggs").style.pointerEvents = "none";
}

function enable_images() {
    document.getElementById("tree").style.pointerEvents = "auto";
    document.getElementById("giraffe").style.pointerEvents = "auto";
    document.getElementById("monkey").style.pointerEvents = "auto";
    document.getElementById("bunny").style.pointerEvents = "auto";
    document.getElementById("easter-eggs").style.pointerEvents = "auto";
}


function initialize() {
    disable_images();
    document.getElementById("sound").style.display = "block";

    let audio = new Audio('story.mp4');
    audio.muted = true;
    audio.play().then(function () {
        audio.muted = false;
        setTimeout(function () {
            document.getElementById("sound").style.display = "none";
            enable_images();
        }, 15000);
    });
}

function click_image(imageId) {

    trial += 1;
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity2_isAtSecondTry');
    document.getElementById("sound").style.display = "block";
    disable_images();

    if (imageId === 'tree' || imageId === 'giraffe' || imageId === 'monkey') {
        document.getElementById('barometru').src = 'RO.png';

        let audio = new Audio('success.mp4');
        audio.play().then(function () {

            if (isAtSecondTry === "true")
            // Second try => 5 points
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity2', '5');
            else
            // First try => 9 points
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity2', '9');

            setTimeout(function () {
                window.location.href = "../yellow_activity3/index.html";
            }, 7000);
        });
    } else {
        if (trial >= 3) {
            trial = 0;

            let audio;
            console.log(isAtSecondTry);
            // if (isAtSecondTry === "true") {
            //     //TODO audio for last trial in case of wrong -> 0 points
            //     audio = new Audio();
            // } else {
            audio = new Audio('try_again_later.mp4');
            localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity2', '0');
            localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity2_isAtSecondTry', "true");
            // }

            audio.play().then(function () {
                setTimeout(function () {
                    window.location.href = "../yellow_activity3/index.html";
                }, 4500);
            });

        } else {
            let audio = new Audio('wrong_answer.mp4');
            audio.play().then(function () {
                setTimeout(function () {
                    document.getElementById("sound").style.display = "none";
                    enable_images();
                }, 3000);
            });
        }

    }


}
