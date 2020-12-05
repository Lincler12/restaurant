import { Images } from "./Images";
import "./menuStyle.css";
const menu = (() => {
  const load = () => {
    Images.foodImagesLoad();
    const content = document.createElement("div");
    content.classList.add("menu-content");
    {
      const section = document.createElement("section");
      let lunchButton;
      let dinnerButton;
      let wineButton;
      let drinksButton;
      {
        const h3 = document.createElement("h3");
        h3.textContent = "Menu";
        section.appendChild(h3);
        const p1 = document.createElement("p");
        p1.textContent = `The old sailor features refined, contemporary Michelin-starred cooking in a beautiful setting overlooking Athens Parthenon.`;
        p1.classList.add("marginBottom");
        const p2 = document.createElement("p");
        p2.textContent = `We welcome reservations up to 28 days in advance`;
        p2.classList.add("marginBottom");
        section.appendChild(p1);
        section.appendChild(p2);
        const menuWrapper = document.createElement("div");
        {
          menuWrapper.style.paddingTop = 0;
          lunchButton = document.createElement("button");
          lunchButton.textContent = "Lunch";
          dinnerButton = document.createElement("button");
          dinnerButton.textContent = "Dinner";
          wineButton = document.createElement("button");
          wineButton.textContent = "Wine";
          drinksButton = document.createElement("button");
          drinksButton.textContent = "Drinks";
          menuWrapper.appendChild(lunchButton);
          menuWrapper.appendChild(dinnerButton);
          menuWrapper.appendChild(wineButton);
          menuWrapper.appendChild(drinksButton);
        }
        section.appendChild(menuWrapper);


      }
      content.appendChild(section);

      const menuContentSection = document.createElement("section");
      {
        function reset() {
          menuContentSection.innerHTML = "";
        }
        function Lunch() {
          reset();
          const p1 = document.createElement("p");
          p1.textContent = `Lunch at The Old Sailor is an option of either a three-course prix fixe or a six-course tasting menu`;
          const p2 = document.createElement('p');
          p2.textContent = `Wine pairings are available`;

          const button = document.createElement("button");
          button.textContent = "Download Lunch Menu";
          menuContentSection.appendChild(p1);
          menuContentSection.appendChild(p2);
          menuContentSection.appendChild(button);
        }
        function Dinner() {
          reset();
          const p1 = document.createElement("p");
          p1.textContent = `Dinner at The Old Sailor is a 6-course menu, involving a few choices on your part, and some surprises we are excited to share with you.`;
          p1.classList.add('marginBottom');
          const p2 = document.createElement("p");
          p2.textContent = `$188 per person`;
          p2.classList.add('marginBottom');
          const button = document.createElement("button");
          button.textContent = "Download Dinner Menu";
          menuContentSection.appendChild(p1);
          menuContentSection.appendChild(p2);
          menuContentSection.appendChild(button);
        }

        function Wine() {
          reset();
          const p = document.createElement("p");
          p.textContent = `The Old Sailor's wine list includes 3,000 selections from around the world, balancing classics with emerging producers to suit all tastes. Since 2016 The Old Sailor has held a Grand Award from Wine Spectator.`;
          const button = document.createElement("button");
          button.textContent = "Download Wine List";
          menuContentSection.appendChild(p);
          menuContentSection.appendChild(button);
        }

        function Drinks() {
          reset();
          const p = document.createElement("p");
          p.textContent = `The Old Sailor offers a carefully curated program of cocktails, beer, and spirits. Cutting-edge or classic, we have something for every taste.`;
          const button = document.createElement("button");
          button.textContent = "Download Drinks List";
          menuContentSection.appendChild(p);
          menuContentSection.appendChild(button);
        }
        lunchButton.addEventListener("click", Lunch);
        dinnerButton.addEventListener("click", Dinner);
        wineButton.addEventListener("click", Wine);
        drinksButton.addEventListener("click", Drinks);
      }
      menuContentSection.style.paddingTop = "40px";
      content.appendChild(menuContentSection);
    }
    return content;
  };

  return {
    load,
  };
})();

export { menu };
