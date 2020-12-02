const modal = (() => {
    const modalContentElement = document.getElementById('modal-content');
    const modalElement = document.getElementById('modal');
    const modalToggleElement = document.getElementById('modal-toggle-btn');




    function toggleModal() {
        modalElement.classList.toggle("modal-toggle");
        modalContentElement.classList.toggle('modal-toggle-content');
    }

    function changeBars() {
        modalToggleElement.classList.toggle("change");
    }
    modalToggleElement.addEventListener('click', toggleModal);
    modalToggleElement.addEventListener('click', changeBars);
})();


const foodImageController = (() => {
    const pageHeader = document.getElementById('page-header');
    const previous = document.getElementById('previous');
    const next = document.getElementById('next');
    const stop = document.getElementById('stop');
    const imgPausePlayElement = document.createElement('img');
    let counter = 0;
    let play = true;
    const intervalTime = 10000;
    let intervalVar;
    let pressed = true;
    let foodImages = [
        "url('images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg')",
        "url('images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg')",
        "url('images/brooke-lark-1Rm9GLHV0UA-unsplash.jpg')",
        "url('images/brooke-lark-M4E7X3z80PQ-unsplash.jpg')",
        "url('images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg')",
        "url('images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg')",
        "url('images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg')"
    ];
    const buttonImages = {
        play: "https://img.icons8.com/android/24/000000/play.png",
        pause: "https://img.icons8.com/windows/32/000000/pause--v1.png"
    };
    imgPausePlayElement.src = buttonImages.pause;
    stop.appendChild(imgPausePlayElement);

    const getNext = () => {
        if (pressed) {
            counter++;
            if (counter === 7) {
                counter = 0;
            }
            pageHeader.style.backgroundImage = foodImages[counter];

            pressed = false;
            setTimeout(function () {
                pressed = true;
            }, 1500);

        }
    }
    const getPrevious = () => {
        if (pressed) {
            counter--;
            if (counter < 0) {
                counter = 6;
            }
            pageHeader.style.backgroundImage = foodImages[counter];
            pressed = false;
            setTimeout(function () {
                pressed = true;
            }, 2000);

        }


    }

    function startInterval() {
        intervalVar = setInterval(getNext, intervalTime);
    }

    function stopInterval() {
        clearInterval(intervalVar);
    }

    function pause() {
        imgPausePlayElement.src = buttonImages.play;
        play = false;
        stopInterval();
    }

    function resume() {
        imgPausePlayElement.src = buttonImages.pause;
        play = true;
        startInterval();
    }

    function toggle() {
        if (play) {
            pause();
        } else {
            resume();
        }
    }
    startInterval();

    previous.addEventListener('click', getPrevious);
    next.addEventListener('click', getNext);
    stop.addEventListener('click', toggle);


})();