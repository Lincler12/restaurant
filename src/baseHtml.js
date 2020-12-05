import logoImg1 from "./images/old-sailor.png";
import { modal } from "./modal.js";

import "./style.css";

const basehtml = (() => {
  const load = () => {
    const body = document.getElementsByTagName("body")[0];
    const contentElement = document.createElement("div");
    contentElement.id = "content";
    body.appendChild(contentElement);

    const topNav = (() => {
      const topNavElement = document.createElement("div");
      topNavElement.id = "top-nav";

      {
        const logoElement = document.createElement("div");
        logoElement.id = "logo";
        const logoImg = document.createElement("img");
        logoImg.id = "logo-img";
        logoImg.src = logoImg1;
        logoElement.appendChild(logoImg);
        topNavElement.appendChild(logoElement);

        const overlay = document.createElement("div");
        overlay.id = "overlay-button-wrapper";

        {
          const reservationsBtn = document.createElement("button");
          reservationsBtn.id = "reservations";
          reservationsBtn.textContent = "Reservations";
          overlay.appendChild(reservationsBtn);

          const modalToggle = document.createElement("div");
          modalToggle.classList.add("container");
          modalToggle.id = "modal-toggle-btn";

          {
            const bar1 = document.createElement("div");
            const bar2 = document.createElement("div");
            const bar3 = document.createElement("div");
            bar1.classList.add("bar1");
            bar2.classList.add("bar2");
            bar3.classList.add("bar3");
            modalToggle.appendChild(bar1);
            modalToggle.appendChild(bar2);
            modalToggle.appendChild(bar3);
          }
          overlay.appendChild(modalToggle);
        }
        topNavElement.appendChild(overlay);

        const modal = document.createElement("div");
        modal.id = "modal";
        modal.classList.add("modal-style");

        {
          const content = document.createElement("div");
          content.id = "modal-content";
          content.classList.add("modal-content");

          {
            const ul = document.createElement("ul");
            {
              for (let i = 0; i < 4; i++) {
                const li = document.createElement("li");

                {
                  const a = document.createElement("a");
                  let text = "";
                  switch (i) {
                    case 0:
                      text = "Menus";
                      a.id = "menu";
                      break;

                    case 1:
                      text = "About";
                      a.id = "about";
                      break;

                    case 2:
                      text = "Location & Hours";
                      a.id = "location";
                      break;

                    case 3:
                      text = "Private Dining";
                      a.id = "dining";
                      break;
                  }

                  a.classList.add("nav-link");

                  a.textContent = text;
                  li.appendChild(a);
                }
                ul.appendChild(li);
              }
            }
            content.appendChild(ul);
          }
          modal.appendChild(content);
        }
        topNavElement.appendChild(modal);
      }
      contentElement.appendChild(topNavElement);
    })();

    const pageHeader = (() => {
      const pageHeaderElement = document.createElement("header");
      pageHeaderElement.id = "page-header";
      {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.classList.add("flex-lay");
        {
          const controlImgWrapper = document.createElement("div");
          controlImgWrapper.id = "control-img-wrapper";
          {
            const previous = document.createElement("div");
            previous.id = "previous";
            previous.classList.add("control");
            {
              const i = document.createElement("i");
              i.classList.add("fas");
              i.classList.add("fa-angle-left");
              previous.appendChild(i);
            }
            controlImgWrapper.appendChild(previous);

            const stop = document.createElement("div");
            stop.id = "stop";
            stop.classList.add("control");
            controlImgWrapper.appendChild(stop);

            const next = document.createElement("div");
            next.id = "next";
            next.classList.add("control");
            {
              const icon = document.createElement("i");
              icon.classList.add("fas");
              icon.classList.add("fa-angle-right");
              next.appendChild(icon);
            }
            controlImgWrapper.appendChild(next);
          }
          overlay.appendChild(controlImgWrapper);
        }
        pageHeaderElement.appendChild(overlay);
      }
      contentElement.appendChild(pageHeaderElement);
    })();
    const mainElement = document.createElement("main");
    contentElement.appendChild(mainElement);

    const footer = (() => {
      const footerElement = document.createElement("footer");
      {
        const button = document.createElement("button");
        button.textContent = `9W 23rd St`;
        footerElement.appendChild(button);
      }
      contentElement.appendChild(footerElement);
    })();

    modal();
  };
  return {
    load,
  };
})();

export { basehtml };
