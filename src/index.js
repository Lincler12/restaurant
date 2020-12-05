import { Images } from "./Images";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./reset.css";
import { basehtml } from "./baseHtml";
import { about } from "./aboutPage";
import { menu } from "./menuPage";
import { imageController } from "./ImageControls";
import { activePageEnum } from "./activePageEnum";

basehtml.load();
imageController.load();

const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const locationButton = document.getElementById("location");
const privateDiningButton = document.getElementById("dining");
const mainContentElement = document.querySelector("main");
let activePage = activePageEnum.ABOUT;

const reset = () => {
  mainContentElement.innerHTML = "";
};

const aboutTab = () => {
  activeTabReset();
  aboutButton.classList.add('activeTab');
  if (activePage !== activePageEnum.ABOUT) {
    activePage = activePageEnum.ABOUT;
    reset();
    imageController.setImagesArray(activePageEnum.ABOUT);
    const aboutPageContent = about.load();
    mainContentElement.appendChild(aboutPageContent);
  }
};

aboutButton.addEventListener("click", aboutTab);

const menuTab = () => {
  activeTabReset();
  menuButton.classList.add("activeTab");
  if (activePage !== activePageEnum.MENU) {
    activePage = activePageEnum.MENU;
    reset();
    imageController.setImagesArray(activePageEnum.MENU);
    const menuPageContent = menu.load();
    mainContentElement.appendChild(menuPageContent);
  }
};
menuButton.addEventListener("click", menuTab);

function activeTabReset(){
  if(menuButton.classList.contains('activeTab')){
    menuButton.classList.remove('activeTab');
  }
  if(aboutButton.classList.contains('activeTab')){
    aboutButton.classList.remove('activeTab');
  }
}

menuTab();
