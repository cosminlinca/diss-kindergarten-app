let incercari = 1;

function click_semafor(culoare) {
    switch(culoare) {
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

function wrong_answer()
{
    // TODO: mesaj audio: culoarea semaforului nu este cea corecta, incearca din nou
    let audio = new Audio('.mp3');
    audio.play().then(function () {
        incercari++;
        if(incercari === 3)
        {
            // TODO: mesaj audio: din pacate nu ai raspuns corect, vom reveni mai tarziu
            let audio = new Audio('.mp3');
            audio.play().then(function () {
                let currentSymbol = localStorage.getItem('CurrentSymbol');
                // 0 puncte, activitatea va fi reluata la final
                localStorage.setItem(currentSymbol + '_Activity4', '0');
                window.location.href = "../violet_activity5/index.html"
            });
        }
    });
}

function right_answer()
{
    document.getElementById('barometru').src = 'ROGV.png';

    // TODO: mesaj audio: felicitari, culoarea corecta a semaforului este verde.
    // ai completat activitatea, prin urmare creionul barometru s-a completat cu culoarea verde
    let audio3 = new Audio('.mp3');
    audio3.play().then(function () {
        let currentSymbol = localStorage.getItem('CurrentSymbol');
        // set number of points for this activity
        localStorage.setItem(currentSymbol+'_Activity4', '4');
        window.location.href="../violet_activity5/index.html"
    });
}