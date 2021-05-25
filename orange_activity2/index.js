let trial = 0;

function click_image(imageId) {

    trial += 1;
    // TODO: block page elements while audio is playing in both cases

    if (imageId === 'tree' || imageId === 'giraffe' || imageId === 'monkey') {
        document.getElementById('barometru').src = 'RO.png';
        // TODO: mesaj audio success
        let audio = new Audio('.mp3');
        audio.play().then(function () {
            let currentSymbol = localStorage.getItem('CurrentSymbol');
            // set number of points for this activity
            localStorage.setItem(currentSymbol + '_Activity2', '2');
            window.location.href = "../yellow_activity3/index.html";
        });
    } else {
        if (trial >= 3) {
            trial = 0;
            // TODO: mesaj audio negativ
            let audio = new Audio('.mp3');
            audio.play().then(function () {
                let currentSymbol = localStorage.getItem('CurrentSymbol');
                // 0 puncte, activitatea va fi reluata la final
                localStorage.setItem(currentSymbol + '_Activity2', '0');
                window.location.href = "../green_activity4/index.html";
            });
        }

    }


}
