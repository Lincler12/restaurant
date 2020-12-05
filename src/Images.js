import foodImg1 from "./images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg";
import foodImg2 from "./images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";
import foodImg3 from "./images/brooke-lark-1Rm9GLHV0UA-unsplash.jpg";
import foodImg4 from "./images/brooke-lark-M4E7X3z80PQ-unsplash.jpg";
import foodImg5 from "./images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg";
import foodImg6 from "./images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg";
import aboutImg1 from "./images/jason-leung-poI7DelFiVA-unsplash.jpg";
import aboutImg2 from "./images/bundo-kim-Pb9bUzH1nD8-unsplash.jpg";

const Images = (() => {
  const aboutImages = [];
  const foodImages = [];
  const loadFirstImages = [];
  const foodSrc = [foodImg1, foodImg2, foodImg3, foodImg4, foodImg5, foodImg6];
  const aboutSrc = [aboutImg1, aboutImg2];
  const foodUrl = [
    `url(${foodImg1})`,
    `url(${foodImg2})`,
    `url(${foodImg3})`,
    `url(${foodImg4})`,
    `url(${foodImg5})`,
    `url(${foodImg6})`,
  ];
  const aboutUrl = [`url(${aboutImg1})`, `url(${aboutImg2})`];
  const foodImagesLoad = () => {
    for (let i = 0; i < foodSrc.length; i++) {
      foodImages.push(new Image());
      foodImages[i].src = foodSrc[i];
    }
  };
  const aboutImagesLoad = () => {
    for (let i = 0; i < aboutSrc.length; i++) {
      aboutImages.push(new Image());
      aboutImages[i].src = aboutSrc[i];
    }
  };
  const loadFirst = () => {
    loadFirstImages.push(new Image());
    loadFirstImages[0].src = aboutSrc[0];
    loadFirstImages.push(new Image());
    loadFirstImages[1].src = foodSrc[1];
  };

  return {
    foodImagesLoad,
    aboutImagesLoad,
    foodImg1,
    foodUrl,
    aboutSrc,
    aboutUrl,
    loadFirst,
  };
})();

export { Images };
