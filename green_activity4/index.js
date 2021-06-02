let incercari = 0;

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

function go_to_next_activity()
{
    let activity_nr = 4;
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');

    // search next unfinished activity
    for(let i=activity_nr+1;i<=7;i++)
    {
        let points = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity' + i.toLocaleString());

        if (points == '0')
        {
            switch (i)
            {
                case 5:
                    window.location.href = "../blue_activity5/index.html";
                    return;
                case 6:
                    window.location.href = "../dark_blue_activity6/index.html";
                    return;
                case 7:
                    window.location.href = "../violet_activity7/index.html";
                    return;
            }
        }
    }
    window.location.href = "../final/index.html";
}

// function check_activity_skip() {
//     let currentGroup = localStorage.getItem('CurrentGroup');
//     let currentSymbol = localStorage.getItem('CurrentSymbol');
//     let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity4_isAtSecondTry');
//     let points = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity4');
//
//     if (isAtSecondTry == "true" && points != '0')
//         window.location.href = "../blue_activity5/index.html";
// }

function initialize() {
    // check_activity_skip();

    document.getElementById("sound").style.display = "block";
    disable_images();

    let audio = new Audio('./activity4.m4a');
    audio.play().then(function() {

        setTimeout(function() {
            document.getElementById("sound").style.display = "none";
            enable_images();

        }, 19000);
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
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity4_isAtSecondTry');
    document.getElementById("sound").style.display = "block";
    disable_images();

    incercari++;

    let audio_name, timeout;

    if (isAtSecondTry == "true" || incercari === 3) {
        audio_name = './final_try.m4a';
        timeout = 7500;
    } else {
        audio_name = './activity4_try_again.m4a';
        timeout = 6000;
    }
    let audio = new Audio(audio_name);
    audio.play().then(function() {

        setTimeout(function() {

            if (isAtSecondTry == "true") {
                // if it is wrong also at the final attempt just go to next activity
                go_to_next_activity();
                // window.location.href = "../blue_activity5/index.html";
            }

            if (incercari === 3) {
                // 0 puncte, activitatea va fi reluata la final
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity4', '0');
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity4_isAtSecondTry', "true");

                go_to_next_activity();
                // window.location.href = "../blue_activity5/index.html";
            } else {
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity4_isAtSecondTry', "false");
                document.getElementById("sound").style.display = "none";
                enable_images();
            }
        }, timeout);
    });
}

function right_answer() {
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity4_isAtSecondTry');

    document.getElementById("sound").style.display = "block";
    disable_images();
    document.getElementById('barometru').src = 'ROGV.png';

    let patrol = document.getElementById('patrol');
    patrol.classList = [];
    patrol.classList.add('patrol-right');

    let audio3 = new Audio('./activity4_success.m4a');
    audio3.play().then(function() {

        if (isAtSecondTry == "true")
            localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity4', '5');
        else
            localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity4', '9');

        localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity4_isAtSecondTry', "true");

        setTimeout(function() {
            go_to_next_activity();
            // window.location.href = "../blue_activity5/index.html";
        }, 4000);
    });
}