let selected = [];
let incercari = 0;

function disable_images() {
    document.getElementById("os").style.pointerEvents = "none";
    document.getElementById("catelus").style.pointerEvents = "none";
    document.getElementById("mananca").style.pointerEvents = "none";
}

function enable_images() {
    document.getElementById("os").style.pointerEvents = "auto";
    document.getElementById("catelus").style.pointerEvents = "auto";
    document.getElementById("mananca").style.pointerEvents = "auto";
}

function initialize() {
    disable_images();
    document.getElementById("sound").style.display = "block";

    let audio = new Audio('./activity3.m4a');
    audio.play().then(function() {

        setTimeout(function() {
            document.getElementById("sound").style.display = "none";
            enable_images();

        }, 14000);
    });
}

function click_image(image, image_id) {
    // add image in the list of images clicked
    selected.push(image_id);

    // make image with clicked id come in front
    handle_image_click(image);

    if (selected.length === 3) {
        document.getElementById("sound").style.display = "block";
        disable_images();

        let currentGroup = localStorage.getItem('CurrentGroup');
        let currentSymbol = localStorage.getItem('CurrentSymbol');
        let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity3_isAtSecondTry');

        // check right order
        if (selected[0] === 1 && selected[1] === 2 && selected[2] === 3) {
            document.getElementById('barometru').src = 'ROG.png';
            let audio = new Audio('./activity3_success.m4a');
            audio.play().then(function() {

                if (isAtSecondTry === "true")
                // Second try => 5 points
                    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity3', '5');
                else
                // First try => 9 points
                    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity3', '9');

                setTimeout(function() {
                    window.location.href = "../green_activity4/index.html";
                }, 3000);
            });
        } else {
            incercari++;

            let audio_name, timeout;

            if (isAtSecondTry === "true" || incercari === 3 )
            {
                audio_name = './final_try.m4a';
                timeout = 7500;
            } else {
                audio_name = './activity3_try_again.m4a';
                timeout = 3000;
            }

            let audio = new Audio(audio_name);
            audio.play().then(function() {
                setTimeout(function() {
                    // Empty image selection
                    selected = [];
                    let images = document.getElementsByClassName('word');
                    for (let i = 0; i < images.length; i++) {
                        images[i].classList.remove('image-click');
                    }

                    if (isAtSecondTry === "true") {
                        // if it is wrong also at the final attempt just go to next activity
                        window.location.href = "../green_activity4/index.html";
                    }

                    if (incercari === 3) {
                        // 0 puncte, activitatea va fi reluata la final
                        localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity3', '0');
                        localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity3_isAtSecondTry', "true");

                        window.location.href = "../green_activity4/index.html";
                    } else {
                        document.getElementById("sound").style.display = "none";
                        enable_images();
                    }
                }, timeout);
            });
        }
    }
}

function handle_image_click(image) {
    image.parentElement.classList.add('image-click');
}