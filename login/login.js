function initialize() {
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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "YellowCircle");
        localStorage.setItem('YellowCircle_Name', yellowCircleInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "GreenCircle");
        localStorage.setItem('GreenCircle_Name', greenCircleInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "BlueWave");
        localStorage.setItem('BlueWave_Name', blueWaveInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "YellowWave");
        localStorage.setItem('YellowWave_Name', yellowWaveInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "PurpleWave");
        localStorage.setItem('PurpleWave_Name', purpleWaveInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "PurpleCircle");
        localStorage.setItem('PurpleCircle_Name', purpleCircleInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "BlueTriangle");
        localStorage.setItem('BlueTriangle_Name', blueTriangleInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "RedTriangle");
        localStorage.setItem('RedTriangle_Name', redTriangleInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "YellowTriangle");
        localStorage.setItem('YellowTriangle_Name', yellowTriangleInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "GreenWave");
        localStorage.setItem('GreenWave_Name', greenWaveInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "BlueRibbon");
        localStorage.setItem('BlueRibbon_Name', blueRibbonInputText.value);

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

        // Save in local storage
        localStorage.setItem('CurrentSymbol', "RedRibbon");
        localStorage.setItem('RedRibbon_Name', redRibbonInputText.value);

        // Navigate
        window.location.href = "../red_activity1/red.html";
    }

    // ---------------------------------------------------------------------------------------------
}