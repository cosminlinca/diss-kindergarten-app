function initialize_second_try_flags()
{
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');

    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity1_isAtSecondTry', "false");
    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity2_isAtSecondTry', "false");
    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity3_isAtSecondTry', "false");
    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity4_isAtSecondTry', "false");
    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity5_isAtSecondTry', "false");
    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity6_isAtSecondTry', "false");
    localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity7_isAtSecondTry', "false");
}

function initialize() {
    document.getElementById("sound").style.display = "block";
    // disable_images();

    let audio = new Audio('../red_activity1/recording_test.mp3');
    audio.play().then(function() {

        setTimeout(function() {
            document.getElementById("sound").style.display = "none";
            // enable_images();

            // TODO: Replace timeout value with recording duration
        }, 5500);
    });


    // YELLOW CIRCLE
    var yellowCircleTd = document.getElementById("yellowCircleTd");

    yellowCircleTd.onclick = function() {
        var yellowCircleInput = document.getElementById("yellowCircleInput");

        if (yellowCircleInput.style.display == "none" || yellowCircleInput.style.display == "") {
            yellowCircleInput.style.display = "block";
        } else if (yellowCircleInput.style.display == "block") {
            yellowCircleInput.style.display = "none";
        }
    }

    var yellowCircleSaveBtn = document.getElementById("yellowCircleSaveBtn");

    yellowCircleSaveBtn.onclick = function() {
        // Get child's name
        var yellowCircleInputText = document.getElementById("yellowCircleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "YellowCircle");
        localStorage.setItem(currentGroup + '_YellowCircle_Name', yellowCircleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // GREEN CIRCLE
    var greenCircleTd = document.getElementById("greenCircleTd");

    greenCircleTd.onclick = function() {
        var greenCircleInput = document.getElementById("greenCircleInput");

        if (greenCircleInput.style.display == "none" || greenCircleInput.style.display == "") {
            greenCircleInput.style.display = "block";
        } else if (greenCircleInput.style.display == "block") {
            greenCircleInput.style.display = "none";
        }
    }

    var greenCircleSaveBtn = document.getElementById("greenCircleSaveBtn");

    greenCircleSaveBtn.onclick = function() {
        // Get child's name
        var greenCircleInputText = document.getElementById("greenCircleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "GreenCircle");
        localStorage.setItem(currentGroup + '_GreenCircle_Name', greenCircleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // BLUE WAVE
    var blueWaveTd = document.getElementById("blueWaveTd");

    blueWaveTd.onclick = function() {
        var blueWaveInput = document.getElementById("blueWaveInput");

        if (blueWaveInput.style.display == "none" || blueWaveInput.style.display == "") {
            blueWaveInput.style.display = "block";
        } else if (blueWaveInput.style.display == "block") {
            blueWaveInput.style.display = "none";
        }
    }

    var blueWaveSaveBtn = document.getElementById("blueWaveSaveBtn");

    blueWaveSaveBtn.onclick = function() {
        // Get child's name
        var blueWaveInputText = document.getElementById("blueWaveInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "BlueWave");
        localStorage.setItem(currentGroup + '_BlueWave_Name', blueWaveInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // YELLOW WAVE
    var yellowWaveTd = document.getElementById("yellowWaveTd");

    yellowWaveTd.onclick = function() {
        var yellowWaveInput = document.getElementById("yellowWaveInput");

        if (yellowWaveInput.style.display == "none" || yellowWaveInput.style.display == "") {
            yellowWaveInput.style.display = "block";
        } else if (yellowWaveInput.style.display == "block") {
            yellowWaveInput.style.display = "none";
        }
    }

    var yellowWaveSaveBtn = document.getElementById("yellowWaveSaveBtn");

    yellowWaveSaveBtn.onclick = function() {
        // Get child's name
        var yellowWaveInputText = document.getElementById("yellowWaveInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "YellowWave");
        localStorage.setItem(currentGroup + '_YellowWave_Name', yellowWaveInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // PURPLE WAVE
    var purpleWaveTd = document.getElementById("purpleWaveTd");

    purpleWaveTd.onclick = function() {
        var purpleWaveInput = document.getElementById("purpleWaveInput");

        if (purpleWaveInput.style.display == "none" || purpleWaveInput.style.display == "") {
            purpleWaveInput.style.display = "block";
        } else if (purpleWaveInput.style.display == "block") {
            purpleWaveInput.style.display = "none";
        }
    }

    var purpleWaveSaveBtn = document.getElementById("purpleWaveSaveBtn");

    purpleWaveSaveBtn.onclick = function() {
        // Get child's name
        var purpleWaveInputText = document.getElementById("purpleWaveInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "PurpleWave");
        localStorage.setItem(currentGroup + '_PurpleWave_Name', purpleWaveInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // PURPLE CIRCLE
    var purpleCircleTd = document.getElementById("purpleCircleTd");

    purpleCircleTd.onclick = function() {
        var purpleCircleInput = document.getElementById("purpleCircleInput");

        if (purpleCircleInput.style.display == "none" || purpleCircleInput.style.display == "") {
            purpleCircleInput.style.display = "block";
        } else if (purpleCircleInput.style.display == "block") {
            purpleCircleInput.style.display = "none";
        }
    }

    var purpleCircleSaveBtn = document.getElementById("purpleCircleSaveBtn");

    purpleCircleSaveBtn.onclick = function() {
        // Get child's name
        var purpleCircleInputText = document.getElementById("purpleCircleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "PurpleCircle");
        localStorage.setItem(currentGroup + '_PurpleCircle_Name', purpleCircleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // BLUE TRIANGLE
    var blueTriangleTd = document.getElementById("blueTriangleTd");

    blueTriangleTd.onclick = function() {
        var blueTriangleInput = document.getElementById("blueTriangleInput");

        if (blueTriangleInput.style.display == "none" || blueTriangleInput.style.display == "") {
            blueTriangleInput.style.display = "block";
        } else if (blueTriangleInput.style.display == "block") {
            blueTriangleInput.style.display = "none";
        }
    }

    var blueTriangleSaveBtn = document.getElementById("blueTriangleSaveBtn");

    blueTriangleSaveBtn.onclick = function() {
        // Get child's name
        var blueTriangleInputText = document.getElementById("blueTriangleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "BlueTriangle");
        localStorage.setItem(currentGroup + '_BlueTriangle_Name', blueTriangleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // RED TRIANGLE
    var redTriangleTd = document.getElementById("redTriangleTd");

    redTriangleTd.onclick = function() {
        var redTriangleInput = document.getElementById("redTriangleInput");

        if (redTriangleInput.style.display == "none" || redTriangleInput.style.display == "") {
            redTriangleInput.style.display = "block";
        } else if (redTriangleInput.style.display == "block") {
            redTriangleInput.style.display = "none";
        }
    }

    var redTriangleSaveBtn = document.getElementById("redTriangleSaveBtn");

    redTriangleSaveBtn.onclick = function() {
        // Get child's name
        var redTriangleInputText = document.getElementById("redTriangleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "RedTriangle");
        localStorage.setItem(currentGroup + '_RedTriangle_Name', redTriangleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // YELLOW TRIANGLE
    var yellowTriangleTd = document.getElementById("yellowTriangleTd");

    yellowTriangleTd.onclick = function() {
        var yellowTriangleInput = document.getElementById("yellowTriangleInput");

        if (yellowTriangleInput.style.display == "none" || yellowTriangleInput.style.display == "") {
            yellowTriangleInput.style.display = "block";
        } else if (yellowTriangleInput.style.display == "block") {
            yellowTriangleInput.style.display = "none";
        }
    }

    var yellowTriangleSaveBtn = document.getElementById("yellowTriangleSaveBtn");

    yellowTriangleSaveBtn.onclick = function() {
        // Get child's name
        var yellowTriangleInputText = document.getElementById("yellowTriangleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "YellowTriangle");
        localStorage.setItem(currentGroup + '_YellowTriangle_Name', yellowTriangleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // GREEN WAVE
    var greenWaveTd = document.getElementById("greenWaveTd");

    greenWaveTd.onclick = function() {
        var greenWaveInput = document.getElementById("greenWaveInput");

        if (greenWaveInput.style.display == "none" || greenWaveInput.style.display == "") {
            greenWaveInput.style.display = "block";
        } else if (greenWaveInput.style.display == "block") {
            greenWaveInput.style.display = "none";
        }
    }

    var greenWaveSaveBtn = document.getElementById("greenWaveSaveBtn");

    greenWaveSaveBtn.onclick = function() {
        // Get child's name
        var greenWaveInputText = document.getElementById("greenWaveInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "GreenWave");
        localStorage.setItem(currentGroup + '_GreenWave_Name', greenWaveInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // BLUE RIBBON
    var blueRibbonTd = document.getElementById("blueRibbonTd");

    blueRibbonTd.onclick = function() {
        var blueRibbonInput = document.getElementById("blueRibbonInput");

        if (blueRibbonInput.style.display == "none" || blueRibbonInput.style.display == "") {
            blueRibbonInput.style.display = "block";
        } else if (blueRibbonInput.style.display == "block") {
            blueRibbonInput.style.display = "none";
        }
    }

    var blueRibbonSaveBtn = document.getElementById("blueRibbonSaveBtn");

    blueRibbonSaveBtn.onclick = function() {
        // Get child's name
        var blueRibbonInputText = document.getElementById("blueRibbonInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "BlueRibbon");
        localStorage.setItem(currentGroup + '_BlueRibbon_Name', blueRibbonInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // RED RIBBON
    var redRibbonTd = document.getElementById("redRibbonTd");

    redRibbonTd.onclick = function() {
        var redRibbonInput = document.getElementById("redRibbonInput");

        if (redRibbonInput.style.display == "none" || redRibbonInput.style.display == "") {
            redRibbonInput.style.display = "block";
        } else if (redRibbonInput.style.display == "block") {
            redRibbonInput.style.display = "none";
        }
    }

    var redRibbonSaveBtn = document.getElementById("redRibbonSaveBtn");

    redRibbonSaveBtn.onclick = function() {
        // Get child's name
        var redRibbonInputText = document.getElementById("redRibbonInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "RedRibbon");
        localStorage.setItem(currentGroup + '_RedRibbon_Name', redRibbonInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------

    // GREEN TRIANGLE
    var greenTriangleTd = document.getElementById("greenTriangleTd");

    greenTriangleTd.onclick = function() {
        var rgreenTriangleInput = document.getElementById("greenTriangleInput");

        if (greenTriangleInput.style.display == "none" || greenTriangleInput.style.display == "") {
            greenTriangleInput.style.display = "block";
        } else if (greenTriangleInput.style.display == "block") {
            greenTriangleInput.style.display = "none";
        }
    }

    var greenTriangleSaveBtn = document.getElementById("greenTriangleSaveBtn");

    greenTriangleSaveBtn.onclick = function() {
        // Get child's name
        var greenTriangleInputText = document.getElementById("greenTriangleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "GreenTriangle");
        localStorage.setItem(currentGroup + '_GreenTriangle_Name', greenTriangleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // PURPLE TRIANGLE
    var purpleTriangleTd = document.getElementById("purpleTriangleTd");

    purpleTriangleTd.onclick = function() {
        var purpleTriangleInput = document.getElementById("purpleTriangleInput");

        if (purpleTriangleInput.style.display == "none" || purpleTriangleInput.style.display == "") {
            purpleTriangleInput.style.display = "block";
        } else if (purpleTriangleInput.style.display == "block") {
            purpleTriangleInput.style.display = "none";
        }
    }

    var purpleTriangleSaveBtn = document.getElementById("purpleTriangleSaveBtn");

    purpleTriangleSaveBtn.onclick = function() {
        // Get child's name
        var purpleTriangleInputText = document.getElementById("purpleTriangleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "PurpleTriangle");
        localStorage.setItem(currentGroup + '_PurpleTriangle_Name', purpleTriangleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // YELLOW STAR
    var yellowStarTd = document.getElementById("yellowStarTd");

    yellowStarTd.onclick = function() {
        var yellowStarInput = document.getElementById("yellowStarInput");

        if (yellowStarInput.style.display == "none" || yellowStarInput.style.display == "") {
            yellowStarInput.style.display = "block";
        } else if (yellowStarInput.style.display == "block") {
            yellowStarInput.style.display = "none";
        }
    }

    var yellowStarSaveBtn = document.getElementById("yellowStarSaveBtn");

    yellowStarSaveBtn.onclick = function() {
        // Get child's name
        var yellowStarInputText = document.getElementById("yellowStarInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "YellowStar");
        localStorage.setItem(currentGroup + '_YellowStar_Name', yellowStarInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // BLUE STAR
    var yellowStarTd = document.getElementById("blueStarTd");

    blueStarTd.onclick = function() {
        var blueStarInput = document.getElementById("blueStarInput");

        if (blueStarInput.style.display == "none" || blueStarInput.style.display == "") {
            blueStarInput.style.display = "block";
        } else if (blueStarInput.style.display == "block") {
            blueStarInput.style.display = "none";
        }
    }

    var blueStarSaveBtn = document.getElementById("blueStarSaveBtn");

    blueStarSaveBtn.onclick = function() {
        // Get child's name
        var blueStarInputText = document.getElementById("blueStarInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "BlueStar");
        localStorage.setItem(currentGroup + '_BlueStar_Name', blueStarInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // GREEN RIBBON
    var greenRibbonTd = document.getElementById("greenRibbonTd");

    greenRibbonTd.onclick = function() {
        var greenRibbonInput = document.getElementById("greenRibbonInput");

        if (greenRibbonInput.style.display == "none" || greenRibbonInput.style.display == "") {
            greenRibbonInput.style.display = "block";
        } else if (greenRibbonInput.style.display == "block") {
            greenRibbonInput.style.display = "none";
        }
    }

    var greenRibbonSaveBtn = document.getElementById("greenRibbonSaveBtn");

    greenRibbonSaveBtn.onclick = function() {
        // Get child's name
        var greenRibbonInputText = document.getElementById("greenRibbonInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "GreenRibbon");
        localStorage.setItem(currentGroup + '_GreenRibbon_Name', greenRibbonInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // PURPLE RIBBON
    var purpleRibbonTd = document.getElementById("purpleRibbonTd");

    purpleRibbonTd.onclick = function() {
        var purpleRibbonInput = document.getElementById("purpleRibbonInput");

        if (purpleRibbonInput.style.display == "none" || purpleRibbonInput.style.display == "") {
            purpleRibbonInput.style.display = "block";
        } else if (purpleRibbonInput.style.display == "block") {
            purpleRibbonInput.style.display = "none";
        }
    }

    var purpleRibbonSaveBtn = document.getElementById("purpleRibbonSaveBtn");

    purpleRibbonSaveBtn.onclick = function() {
        // Get child's name
        var purpleRibbonInputText = document.getElementById("purpleRibbonInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "PurpleRibbon");
        localStorage.setItem(currentGroup + '_PurpleRibbon_Name', purpleRibbonInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // YELLOW RIBBON
    var yellowRibbonTd = document.getElementById("yellowRibbonTd");

    yellowRibbonTd.onclick = function() {
        var yellowRibbonInput = document.getElementById("yellowRibbonInput");

        if (yellowRibbonInput.style.display == "none" || yellowRibbonInput.style.display == "") {
            yellowRibbonInput.style.display = "block";
        } else if (yellowRibbonInput.style.display == "block") {
            yellowRibbonInput.style.display = "none";
        }
    }

    var yellowRibbonSaveBtn = document.getElementById("yellowRibbonSaveBtn");

    yellowRibbonSaveBtn.onclick = function() {
        // Get child's name
        var yellowRibbonInputText = document.getElementById("yellowRibbonInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "YellowRibbon");
        localStorage.setItem(currentGroup + '_YellowRibbon_Name', yellowRibbonInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // RED STAR
    var redStarTd = document.getElementById("redStarTd");

    redStarTd.onclick = function() {
        var redStarInput = document.getElementById("redStarInput");

        if (redStarInput.style.display == "none" || redStarInput.style.display == "") {
            redStarInput.style.display = "block";
        } else if (redStarInput.style.display == "block") {
            redStarInput.style.display = "none";
        }
    }

    var redStarSaveBtn = document.getElementById("redStarSaveBtn");

    redStarSaveBtn.onclick = function() {
        // Get child's name
        var redStarInputText = document.getElementById("redStarInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "RedStar");
        localStorage.setItem(currentGroup + '_RedStar_Name', redStarInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // GREEN STAR
    var greenStarTd = document.getElementById("greenStarTd");

    greenStarTd.onclick = function() {
        var greenStarInput = document.getElementById("greenStarInput");

        if (greenStarInput.style.display == "none" || greenStarInput.style.display == "") {
            greenStarInput.style.display = "block";
        } else if (greenStarInput.style.display == "block") {
            greenStarInput.style.display = "none";
        }
    }

    var greenStarSaveBtn = document.getElementById("greenStarSaveBtn");

    greenStarSaveBtn.onclick = function() {
        // Get child's name
        var greenStarInputText = document.getElementById("greenStarInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "GreenStar");
        localStorage.setItem(currentGroup + '_GreenStar_Name', greenStarInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // PURPLE STAR
    var purpleStarTd = document.getElementById("purpleStarTd");

    purpleStarTd.onclick = function() {
        var purpleStarInput = document.getElementById("purpleStarInput");

        if (purpleStarInput.style.display == "none" || purpleStarInput.style.display == "") {
            purpleStarInput.style.display = "block";
        } else if (purpleStarInput.style.display == "block") {
            purpleStarInput.style.display = "none";
        }
    }

    var purpleStarSaveBtn = document.getElementById("purpleStarSaveBtn");

    purpleStarSaveBtn.onclick = function() {
        // Get child's name
        var purpleStarInputText = document.getElementById("purpleStarInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "PurpleStar");
        localStorage.setItem(currentGroup + '_PurpleStar_Name', purpleStarInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // RED WAVE
    var redWaveTd = document.getElementById("redWaveTd");

    redWaveTd.onclick = function() {
        var redWaveInput = document.getElementById("redWaveInput");

        if (redWaveInput.style.display == "none" || redWaveInput.style.display == "") {
            redWaveInput.style.display = "block";
        } else if (redWaveInput.style.display == "block") {
            redWaveInput.style.display = "none";
        }
    }

    var redWaveSaveBtn = document.getElementById("redWaveSaveBtn");

    redWaveSaveBtn.onclick = function() {
        // Get child's name
        var redWaveInputText = document.getElementById("redWaveInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "RedWave");
        localStorage.setItem(currentGroup + '_RedWave_Name', redWaveInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // BLUE CIRCLE
    var blueCircleTd = document.getElementById("blueCircleTd");

    blueCircleTd.onclick = function() {
        var blueCircleInput = document.getElementById("blueCircleInput");

        if (blueCircleInput.style.display == "none" || blueCircleInput.style.display == "") {
            blueCircleInput.style.display = "block";
        } else if (blueCircleInput.style.display == "block") {
            blueCircleInput.style.display = "none";
        }
    }

    var blueCircleSaveBtn = document.getElementById("blueCircleSaveBtn");

    blueCircleSaveBtn.onclick = function() {
        // Get child's name
        var blueCircleInputText = document.getElementById("blueCircleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "BlueCircle");
        localStorage.setItem(currentGroup + '_BlueCircle_Name', blueCircleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------


    // RED CIRCLE
    var redCircleTd = document.getElementById("redCircleTd");

    redCircleTd.onclick = function() {
        var redCircleInput = document.getElementById("redCircleInput");

        if (redCircleInput.style.display == "none" || redCircleInput.style.display == "") {
            redCircleInput.style.display = "block";
        } else if (redCircleInput.style.display == "block") {
            redCircleInput.style.display = "none";
        }
    }

    var redCircleSaveBtn = document.getElementById("redCircleSaveBtn");

    redCircleSaveBtn.onclick = function() {
        // Get child's name
        var redCircleInputText = document.getElementById("redCircleInputText");

        // Get local storage
        localStorage = window.localStorage;

        // Get group
        let currentGroup = localStorage.getItem('CurrentGroup');

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "RedCircle");
        localStorage.setItem(currentGroup + '_RedCircle_Name', redCircleInputText.value);

        initialize_second_try_flags();

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------
}