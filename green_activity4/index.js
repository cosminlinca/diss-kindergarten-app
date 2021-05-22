
function click_semafor(culoare) {
    switch(culoare) {
        case 'rosu':
            // TODO: mesaj audio: culoarea semaforului nu este cea corecta, incearca din nou
            // let audio = new Audio('.mp3');
            // audio.play().then(function () {
            //
            // });
            break;
        case 'galben':
            // TODO: mesaj audio: culoarea semaforului nu este cea corecta, incearca din nou
            // let audio = new Audio('.mp3');
            // audio.play().then(function () {
            //
            // });
            break;
        case 'verde':
            document.getElementById('barometru').src = 'ROGV.png';

            // TODO: mesaj audio: felicitari, culoarea corecta a semaforului este verde.
            // ai completat activitatea, prin urmare creionul barometru s-a completat cu culoarea verde
            let audio = new Audio('.mp3');
            audio.play().then(function () {
                window.location.href="../violet_activity5/index.html"
            });
            break;
        default:
            break;
    }
}