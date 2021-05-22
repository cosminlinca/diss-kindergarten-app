let selected = [];

function click_image(image, image_id){
    // add image in the list of images clicked
    selected.push(image_id);

    // make image with clicked id come in front
    handle_image_click(image);

    if(selected.length === 4)
    {
        // check right order
        if (selected[0] === 1 && selected[1] === 2 && selected[2] === 3 && selected[3] === 4)
        {
            document.getElementById('barometru').src = 'ROG.png';
            // TODO: mesaj audio: felicitari, ai completat activitatea cu succes, prin urmare creionul barometru s-a completat cu culoarea galben
            let audio = new Audio('.mp3');
            audio.play().then(function () {
                window.location.href="../green_activity4/index.html";
            });
        }
        else {
            // TODO: mesaj audio: ordinea este gresita, incearca din nou
            let audio = new Audio('.mp3');
            audio.play().then(function () {
                // Empty image selection
                selected = [];
                let images = document.getElementsByClassName('word');
                for(let i=0;i<images.length;i++)
                {
                    images[i].classList.remove('image-click');
                }
            });
        }
    }
}

function handle_image_click(image) {
    image.parentElement.classList.add('image-click');
}