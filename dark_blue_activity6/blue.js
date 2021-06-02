var selectedCrayon = '';
var incercari = 0;

// function check_activity_skip() {
//     let currentGroup = localStorage.getItem('CurrentGroup');
//     let currentSymbol = localStorage.getItem('CurrentSymbol');
//     let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity6_isAtSecondTry');
//     let points = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity6');
//
//     if (isAtSecondTry == "true" && points != '0')
//         window.location.href = "../violet_activity7/index.html";
// }

function go_to_next_activity()
{
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let points = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity7');

    if (points == '0')
    {
        window.location.href = "../violet_activity7/index.html";
    } else
    {
        window.location.href = "../final/index.html";
    }
}

function intro() {

    // check_activity_skip();

    document.getElementById("sound").style.display = "block";
    var audio = new Audio('intro.mp3');
    audio.muted = true;
    audio.play().then(function() {
        audio.muted = false;
    });

    audio.onended = function() {
        document.getElementById("sound").style.display = "block";
        var audio2 = new Audio('creion_rosu.mp3');
        audio2.muted = true;
        audio2.play().then(function() {
            audio2.muted = false;
            setTimeout(function() {
                document.getElementById("sound").style.display = "none";
            }, 5500);
        });
    };

}

function selectCrayonTop(crayon) {
    if (selectedCrayon == '' && crayon == 'crayon3') {
        resetCrayons();
        document.getElementById(crayon).style.top = "10";
        selectedCrayon = 'red';
    } else if (selectedCrayon == 'red' && crayon == 'crayon6') {
        if (document.getElementById('bigCercle1img').getAttribute('src') == "big_cercle_full.png" &&
            document.getElementById('bigCercle2img').getAttribute('src') == "big_cercle_full.png") {
            resetCrayons();
            document.getElementById(crayon).style.top = "10";
            selectedCrayon = 'yellow';

        } else {
            //mai sunt cercuri
            wrong_answer();
        }
    } else if (selectedCrayon == 'brown' && crayon == 'crayon5') {
        if (document.getElementById('smallTriangle1img').getAttribute('src') == "small_triangle_full.png" &&
            document.getElementById('smallTriangle2img').getAttribute('src') == "small_triangle_full.png" &&
            document.getElementById('smallTriangle3img').getAttribute('src') == "small_triangle_full.png" &&
            document.getElementById('smallTriangle4img').getAttribute('src') == "small_triangle_full.png") {
            resetCrayons();
            document.getElementById(crayon).style.top = "10";
            selectedCrayon = 'orange';

        } else {
            //mai sunt cercuri
            wrong_answer();
        }
    } else {
        // culoare invalida
        wrong_answer();
    }
}

function selectCrayonRight(crayon) {
    if (selectedCrayon == 'yellow' && crayon == 'crayon7') {
        if (document.getElementById('bigSquare1img').getAttribute('src') == "big_square_full.png" &&
            document.getElementById('bigSquare2img').getAttribute('src') == "big_square_full.png") {
            resetCrayons();
            document.getElementById(crayon).style.right = "15";
            selectedCrayon = 'blue';
        } else {
            //mai sunt patrate
            wrong_answer();
        }
    } else if (selectedCrayon == 'blue' && crayon == 'crayon11') {
        if (document.getElementById('smallCercle1img').getAttribute('src') == "small_cercle_full.png" &&
            document.getElementById('smallCercle2img').getAttribute('src') == "small_cercle_full.png" &&
            document.getElementById('smallCercle3img').getAttribute('src') == "small_cercle_full.png" &&
            document.getElementById('smallCercle4img').getAttribute('src') == "small_cercle_full.png") {
            resetCrayons();
            document.getElementById(crayon).style.right = "15";
            selectedCrayon = 'brown';

        } else {
            //mai sunt cercuri
            wrong_answer();
        }
    } else {
        // culoare invalida
        wrong_answer();
    }
}

function resetCrayons() {
    document.getElementById("crayon1").style.top = "0";
    document.getElementById("crayon2").style.top = "0";
    document.getElementById("crayon3").style.top = "0";
    document.getElementById("crayon4").style.top = "0";
    document.getElementById("crayon5").style.top = "0";
    document.getElementById("crayon6").style.top = "0";
    document.getElementById("crayon7").style.right = "0";
    document.getElementById("crayon8").style.right = "0";
    document.getElementById("crayon9").style.right = "0";
    document.getElementById("crayon10").style.right = "0";
    document.getElementById("crayon11").style.right = "0";
}

function colorBigSquare(squareId) {
    if (selectedCrayon == 'yellow') {
        document.getElementById(squareId).src = "big_square_full.png";
    } else {
        wrong_answer();
    }
    if (document.getElementById('bigSquare1img').getAttribute('src') == "big_square_full.png" &&
        document.getElementById('bigSquare2img').getAttribute('src') == "big_square_full.png") {
        resetCrayons();
        document.getElementById("sound").style.display = "block";
        var audio = new Audio('bravo-Cori.mp3');
        audio.muted = true;
        audio.play().then(function() {
            audio.muted = false;
        });
        audio.onended = function() {
            document.getElementById("sound").style.display = "block";
            var audio = new Audio('creion_albastru.mp3');
            audio.muted = true;
            audio.play().then(function() {
                audio.muted = false;
                setTimeout(function() {
                    document.getElementById("sound").style.display = "none";
                }, 5500);
            });
        };
    }
}

function colorSmallSquare(squareId) {
    if (selectedCrayon == 'orange') {
        document.getElementById(squareId).src = "small_square_full.png";
    } else {
        wrong_answer();
    }
    if (document.getElementById('smallSquare1img').getAttribute('src') == "small_square_full.png" &&
        document.getElementById('smallSquare2img').getAttribute('src') == "small_square_full.png" &&
        document.getElementById('smallSquare3img').getAttribute('src') == "small_square_full.png") {
        resetCrayons();
        document.getElementById("sound").style.display = "block";
        var audio = new Audio('bravo-Cori.mp3');
        audio.muted = true;
        audio.play().then(function() {
            audio.muted = false;
        });
        audio.onended = function() {
            document.getElementById("sound").style.display = "block";
            rightAnswer();
        };
    }
}

function colorBigCercle(cercleId) {
    if (selectedCrayon == 'red') {
        document.getElementById(cercleId).src = "big_cercle_full.png";
    } else {
        wrong_answer();
    }
    if (document.getElementById('bigCercle1img').getAttribute('src') == "big_cercle_full.png" &&
        document.getElementById('bigCercle2img').getAttribute('src') == "big_cercle_full.png") {
        resetCrayons();
        document.getElementById("sound").style.display = "block";
        var audio = new Audio('bravo-Cori.mp3');
        audio.muted = true;
        audio.play().then(function() {
            audio.muted = false;
        });
        audio.onended = function() {
            document.getElementById("sound").style.display = "block";
            var audio = new Audio('creion_galben.mp3');
            audio.muted = true;
            audio.play().then(function() {
                audio.muted = false;
                setTimeout(function() {
                    document.getElementById("sound").style.display = "none";
                }, 5500);
            });
        };
    }
}

function colorSmallCercle(cercleId) {
    if (selectedCrayon == 'blue') {
        document.getElementById(cercleId).src = "small_cercle_full.png";
    } else {
        wrong_answer();
    }
    if (document.getElementById('smallCercle1img').getAttribute('src') == "small_cercle_full.png" &&
        document.getElementById('smallCercle2img').getAttribute('src') == "small_cercle_full.png" &&
        document.getElementById('smallCercle3img').getAttribute('src') == "small_cercle_full.png" &&
        document.getElementById('smallCercle4img').getAttribute('src') == "small_cercle_full.png") {
        resetCrayons();
        document.getElementById("sound").style.display = "block";
        var audio = new Audio('bravo-Cori.mp3');
        audio.muted = true;
        audio.play().then(function() {
            audio.muted = false;
        });
        audio.onended = function() {
            document.getElementById("sound").style.display = "block";
            var audio = new Audio('creion_maro.mp3');
            audio.muted = true;
            audio.play().then(function() {
                audio.muted = false;
                setTimeout(function() {
                    document.getElementById("sound").style.display = "none";
                }, 5500);
            });
        };

    }
}

function colorSmallTriangle(triangleId) {
    if (selectedCrayon == 'brown') {
        document.getElementById(triangleId).src = "small_triangle_full.png";
    } else {
        wrong_answer();
    }
    if (document.getElementById('smallTriangle1img').getAttribute('src') == "small_triangle_full.png" &&
        document.getElementById('smallTriangle2img').getAttribute('src') == "small_triangle_full.png" &&
        document.getElementById('smallTriangle3img').getAttribute('src') == "small_triangle_full.png" &&
        document.getElementById('smallTriangle4img').getAttribute('src') == "small_triangle_full.png") {
        resetCrayons();
        document.getElementById("sound").style.display = "block";
        var audio = new Audio('bravo-Cori.mp3');
        audio.muted = true;
        audio.play().then(function() {
            audio.muted = false;
        });
        audio.onended = function() {
            document.getElementById("sound").style.display = "block";
            var audio = new Audio('creion_portocaliu.mp3');
            audio.muted = true;
            audio.play().then(function() {
                audio.muted = false;
                setTimeout(function() {
                    document.getElementById("sound").style.display = "none";
                }, 5500);
            });
        };

    }
}


function wrong_answer() {
    var currentGroup = localStorage.getItem('CurrentGroup');
    var currentSymbol = localStorage.getItem('CurrentSymbol');
    var isAtSecondTry = localStorage.getItem(currentGroup + "_" + currentSymbol + '_Activity6_isAtSecondTry');

    document.getElementById("sound").style.display = "block";
    incercari++;

    if (incercari === 3) {
        // 0 puncte, activitatea va fi reluata la final
        localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity6', '0');
        localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity6_isAtSecondTry', "true");
        if (isAtSecondTry == "false") {
            var audio = new Audio('finish2.mp3');
            audio.play().then(function() {

                setTimeout(function() {

                }, 6000);
            });
            audio.onended = function() {
                go_to_next_activity();
                // window.location.href = "../violet_activity7/index.html";
            }
        }
    } else {
        localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity6_isAtSecondTry', "false");
        document.getElementById("sound").style.display = "none";

        var audio = new Audio('mai_incearca.mp3');
        audio.play().then(function() {

            setTimeout(function() {

            }, 6000);
        });
    }
}

function rightAnswer() {
    document.getElementById('barometer_pencil_img').src = 'ROGVAI.png';

    var audio3 = new Audio('finish1.mp3');
    audio3.play().then(function() {
        var currentGroup = localStorage.getItem('CurrentGroup');
        var currentSymbol = localStorage.getItem('CurrentSymbol');
        var isAtSecondTry = localStorage.getItem(currentGroup + "_" + currentSymbol + '_Activity6_isAtSecondTry');

        if (isAtSecondTry == "false") {
            // set number of points for this activity
            localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity6', '6');
        } else {
            localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity6', '3');
        }

        localStorage.setItem(currentGroup + "_" + currentSymbol + '_Activity6_isAtSecondTry', "true");

        setTimeout(function() {
            go_to_next_activity();
            // window.location.href = "../violet_activity7/index.html";
        }, 3000);
    });
}