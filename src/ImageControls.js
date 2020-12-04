import {
    activePageEnum
} from './activePageEnum';
import {
    load
} from './load';

const imageController = (() => {

    let imageCollection = [];

    function load() {
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

        const buttonImages = {
            play: "https://img.icons8.com/android/24/000000/play.png",
            pause: "https://img.icons8.com/windows/32/000000/pause--v1.png"
        };
        imgPausePlayElement.src = buttonImages.pause;
        stop.appendChild(imgPausePlayElement);

        const getNext = () => {
            if (pressed) {
                counter++;
                if (counter === imageCollection.length) {
                    counter = 0;
                }
                pageHeader.style.backgroundImage = imageCollection[counter];

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
                    counter = imageCollection.length - 1;
                }
                pageHeader.style.backgroundImage = imageCollection[counter];
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
    }

    const setImagesArray = (value) => {
        switch (value) {
            case activePageEnum.MENU: {
                imageCollection = [...load.foodUrl];
                break;
            }
            case activePageEnum.ABOUT: {
                imageCollection = [...load.aboutUrl];
                break;
            }
        }
    };

    return {
        setImagesArray,
        load,
    }

})();


export {
    imageController
};