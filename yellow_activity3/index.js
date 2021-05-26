let selected = [];
let incercari = 1;

function disable_images()
{
    document.getElementById("os").style.pointerEvents = "none";
    document.getElementById("catelus").style.pointerEvents = "none";
    document.getElementById("unu").style.pointerEvents = "none";
    document.getElementById("mananca").style.pointerEvents = "none";
}

function enable_images()
{
    document.getElementById("os").style.pointerEvents = "auto";
    document.getElementById("catelus").style.pointerEvents = "auto";
    document.getElementById("unu").style.pointerEvents = "auto";
    document.getElementById("mananca").style.pointerEvents = "auto";
}

function initialize()
{
    disable_images();
    document.getElementById("sound").style.display = "block";

    // TODO: Replace recording name
    let audio = new Audio('../red_activity1/recording_test.mp3');
    audio.play().then(function() {

        setTimeout(function() {
            document.getElementById("sound").style.display = "none";
            enable_images();

            // TODO: Replace timeout value with recording duration
        }, 5500);
    });
}

function click_image(image, image_id){
    // add image in the list of images clicked
    selected.push(image_id);

    // make image with clicked id come in front
    handle_image_click(image);

    if(selected.length === 4)
    {
        document.getElementById("sound").style.display = "block";
        disable_images();

        // check right order
        if (selected[0] === 1 && selected[1] === 2 && selected[2] === 3 && selected[3] === 4)
        {
            document.getElementById('barometru').src = 'ROG.png';
            // TODO: replace recording name
            let audio = new Audio('../red_activity1/bravo-Cori.mp3');
            audio.play().then(function () {
                let currentSymbol = localStorage.getItem('CurrentSymbol');
                // set number of points for this activity
                localStorage.setItem(currentSymbol+'_Activity3', '3');

                setTimeout(function() {
                    window.location.href="../green_activity4/index.html";
                    // TODO: Replace timeout value with recording duration
                }, 2000);
            });
        }
        else {
            // TODO: Replace recording name
            let audio = new Audio('../red_activity1/mai-incearca-Cori.mp3');
            audio.play().then(function () {
                setTimeout(function() {
                    // Empty image selection
                    selected = [];
                    let images = document.getElementsByClassName('word');
                    for(let i=0;i<images.length;i++)
                    {
                        images[i].classList.remove('image-click');
                    }
                    incercari += 1;
                    if(incercari === 3)
                    {
                        // TODO: Replace recording name
                        let audio = new Audio('../red_activity1/mai-incearca-Cori.mp3');
                        audio.play().then(function () {
                            let currentSymbol = localStorage.getItem('CurrentSymbol');
                            // 0 puncte, activitatea va fi reluata la final
                            localStorage.setItem(currentSymbol+'_Activity3', '0');

                            setTimeout(function() {
                                window.location.href="../green_activity4/index.html";
                                // TODO: Replace timeout value with recording duration
                            }, 2000);
                        });
                    } else {
                        document.getElementById("sound").style.display = "none";
                        enable_images();
                    }
                    // TODO: Replace timeout value with recording duration
                }, 2000);
            });
        }
    }
}

function handle_image_click(image) {
    image.parentElement.classList.add('image-click');
}