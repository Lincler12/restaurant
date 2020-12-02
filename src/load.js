import foodImg1 from './images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg';
import foodImg2 from './images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';
import foodImg3 from './images/brooke-lark-1Rm9GLHV0UA-unsplash.jpg';
import foodImg4 from './images/brooke-lark-M4E7X3z80PQ-unsplash.jpg';
import foodImg5 from './images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg';
import foodImg6 from './images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';

const load = (() => {
    let foodUrl = [
        `url(${foodImg1})`,
        `url(${foodImg2})`,
        `url(${foodImg3})`,
        `url(${foodImg4})`,
        `url(${foodImg5})`,
        `url(${foodImg6})`
    ];
    let foodImages = [];
    for (let i = 0; i < foodUrl.length; i++) {
        foodImages.push(new Image());
        foodImages[i].src = foodUrl[i];
    }

    return{
        foodUrl,
    }
})();

export {load};