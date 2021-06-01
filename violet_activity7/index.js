let incercari = 0;
let activitati = 1;

function disable_images() {
    document.getElementById("chef").style.pointerEvents = "none";
    document.getElementById("singer").style.pointerEvents = "none";
    document.getElementById("doctor").style.pointerEvents = "none";
}

function enable_images() {
    document.getElementById("chef").style.pointerEvents = "auto";
    document.getElementById("singer").style.pointerEvents = "auto";
    document.getElementById("doctor").style.pointerEvents = "auto";
}

function check_activity_skip()
{
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity7_isAtSecondTry');
    let points = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity7');

    if (isAtSecondTry === "true" && points !== '0')
        window.location.href = "../final/index.html";
}

function initialize() {
    check_activity_skip();

    document.getElementById("sound").style.display = "block";
    disable_images();

    let audio = new Audio('./audio1.m4a');
    audio.play().then(function() {

        setTimeout(function() {
            
			let audio1 = new Audio('./audio2.m4a');
    audio1.play().then(function() {

        setTimeout(function() {
           
            enable_images();
			 document.getElementById("sound").style.display = "none";

        }, 4000);
    });
            enable_images();

        }, 17000);
    });
	
	    
}

function click_job(job) {
	if(activitati == 1){
    switch (job) {
        case 'singer':
            wrong_answer();
            break;
        case 'doctor':
            wrong_answer();
            break;
        case 'chef':
            right_answer();
            break;
        default:
            break;
    }
	}
	else
		if(activitati == 2){
    switch (job) {
        case 'singer':
            right_answer();
            break;
        case 'doctor':
            wrong_answer();
            break;
        case 'chef':
            wrong_answer();
            break;
        default:
            break;
    }
	}
	else
		if(activitati == 3){
    switch (job) {
        case 'singer':
            wrong_answer();
            break;
        case 'doctor':
            right_answer();
            break;
        case 'chef':
            wrong_answer();
            break;
        default:
            break;
    }
	}
}

function wrong_answer() {
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup+ '_' + currentSymbol + '_Activity7_isAtSecondTry');
    document.getElementById("sound").style.display = "block";
    disable_images();
    incercari++;
    let audio = new Audio('./audio6.m4a');
    audio.play().then(function() {

        setTimeout(function() {

            if (isAtSecondTry === "true") {
                // if it is wrong also at the final attempt just go to next activity
				disable_images()
				let audio1 = new Audio('./audio7.m4a');
                audio1.play().then(function() {

                    setTimeout(function() {
                        document.getElementById("sound").style.display = "none";
                        window.location.href = "../final/index.html";
                    }, 7000);
                });
              
            }

            if (incercari === 3) {
				disable_images()
				let audio1 = new Audio('./audio7.m4a');
                audio1.play().then(function() {

                    setTimeout(function() {

                         localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity7', '0');
                         localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity7_isAtSecondTry', "true");

                         window.location.href = "../red_activity1/red.html";
                         document.getElementById("sound").style.display = "none";
                    }, 7000);
                });
               
            } else {
                localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity7_isAtSecondTry', "false");
                enable_images();
                document.getElementById("sound").style.display = "none";
            }
        }, 1000);
    });
}

function right_answer() {
    let currentGroup = localStorage.getItem('CurrentGroup');
    let currentSymbol = localStorage.getItem('CurrentSymbol');
    let isAtSecondTry = localStorage.getItem(currentGroup + '_' + currentSymbol + '_Activity7_isAtSecondTry');

    document.getElementById("sound").style.display = "block";
    disable_images();
    document.getElementById('barometru').src = 'creion3.png';

	if (activitati == 1 )
	{
		activitati = 2;
		document.getElementById("sound").style.display = "block";
        disable_images();

        let audio = new Audio('./audio5.m4a');
        audio.play().then(function() {

            setTimeout(function() {
                 let audio1 = new Audio('./audio3.m4a');
        audio1.play().then(function() {

            setTimeout(function() {
                document.getElementById("sound").style.display = "none";
                enable_images();

            }, 4000);
        });
                document.getElementById("sound").style.display = "none";
                enable_images();

            }, 4000);
        });
		
	}
	else if (activitati == 2 )
	{
		activitati = 3;
		document.getElementById("sound").style.display = "block";
        disable_images();

           let audio = new Audio('./audio5.m4a');
            audio.play().then(function() {

                setTimeout(function() {
                     let audio1 = new Audio('./audio4.m4a');
                    audio1.play().then(function() {

                        setTimeout(function() {
                            document.getElementById("sound").style.display = "none";
                            enable_images();

                        }, 4000);
                    });
                    document.getElementById("sound").style.display = "none";
                    enable_images();

            }, 4000);
        });
	}
	else {
    let audio3 = new Audio('./audio5.m4a');
    audio3.play().then(function() {

        if (isAtSecondTry === "true")
            localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity7', '5');
        else
            localStorage.setItem(currentGroup + '_' + currentSymbol + '_Activity7', '9');

        setTimeout(function() {
            if(isAtSecondTry === "true")
                window.location.href = "../final/index.html";
            else
                window.location.href = "../red_activity1/red.html";
        }, 4000);
    });
	}
}