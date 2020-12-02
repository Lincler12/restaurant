import foodImg1 from './images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg';
import foodImg2 from './images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';
import foodImg3 from './images/brooke-lark-1Rm9GLHV0UA-unsplash.jpg';
import foodImg4 from './images/brooke-lark-M4E7X3z80PQ-unsplash.jpg';
import foodImg5 from './images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg';
import foodImg6 from './images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';


const foodImageController = (() => {
    const pageHeader = document.getElementById('page-header');
    const previous = document.getElementById('previous');
    const next = document.getElementById('next');
    const stop = document.getElementById('stop');
    const imgPausePlayElement = document.createElement('img');
    let counter = 0;
    const imgCount = 6;
    let play = true;
    const intervalTime = 10000;
    let intervalVar;
    let pressed = true;
    let foodImages = [
        `url(${foodImg1})`,
        `url(${foodImg2})`,
        `url(${foodImg3})`,
        `url(${foodImg4})`,
        `url(${foodImg5})`,
        `url(${foodImg6})`
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
            if (counter === imgCount) {
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


export {foodImageController};