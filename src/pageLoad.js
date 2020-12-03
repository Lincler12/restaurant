import logoImg1 from './images/old-sailor.png';

const content = (() => {

    const contentElement = document.getElementById('content');
    const topNav = (() => {
        const topNavElement = document.createElement('div');
        topNavElement.id = 'top-nav';

        {
            const logoElement = document.createElement('div');
            logoElement.id = 'logo';
            const logoImg = document.createElement('img');
            logoImg.id = 'logo-img';
            logoImg.src = logoImg1;
            logoElement.appendChild(logoImg);
            topNavElement.appendChild(logoElement);

            const overlay = document.createElement('div');
            overlay.id = 'overlay-button-wrapper';


            {
                const reservationsBtn = document.createElement('button');
                reservationsBtn.id = 'reservations';
                reservationsBtn.textContent = 'Reservations';
                overlay.appendChild(reservationsBtn);

                const modalToggle = document.createElement('div');
                modalToggle.classList.add('container');
                modalToggle.id = 'modal-toggle-btn';

                {
                    const bar1 = document.createElement('div');
                    const bar2 = document.createElement('div');
                    const bar3 = document.createElement('div');
                    bar1.classList.add('bar1');
                    bar2.classList.add('bar2');
                    bar3.classList.add('bar3');
                    modalToggle.appendChild(bar1);
                    modalToggle.appendChild(bar2);
                    modalToggle.appendChild(bar3);

                }
                overlay.appendChild(modalToggle);


            }
            topNavElement.appendChild(overlay);

            const modal = document.createElement('div');
            modal.id = 'modal';
            modal.classList.add('modal-style');


            {
                const content = document.createElement('div');
                content.id = 'modal-content';
                content.classList.add('modal-content');


                {
                    const ul = document.createElement('ul'); {
                        for (let i = 0; i < 4; i++) {
                            const li = document.createElement('li');

                            {
                                let text = '';
                                switch (i) {
                                    case 0:
                                        text = 'Menus';
                                        break;

                                    case 1:
                                        text = 'About';
                                        break;

                                    case 2:
                                        text = 'Location & Hours';
                                        break;

                                    case 3:
                                        text = 'Private Dining';
                                        break;

                                }
                                const a = document.createElement('a');
                                a.classList.add('nav-link')
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
        const pageHeaderElement = document.createElement('header');
        pageHeaderElement.id = 'page-header'; {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.classList.add('flex-lay'); {
                const controlImgWrapper = document.createElement('div');
                controlImgWrapper.id = 'control-img-wrapper'; {
                    const previous = document.createElement('div');
                    previous.id = 'previous';
                    previous.classList.add('control'); {
                        const i = document.createElement('i');
                        i.classList.add('fas');
                        i.classList.add('fa-angle-left');
                        previous.appendChild(i);
                    }
                    controlImgWrapper.appendChild(previous);

                    const stop = document.createElement('div');
                    stop.id = 'stop';
                    stop.classList.add('control');
                    controlImgWrapper.appendChild(stop);

                    const next = document.createElement('div');
                    next.id = 'next';
                    next.classList.add('control'); {
                        const icon = document.createElement('i');
                        icon.classList.add('fas');
                        icon.classList.add('fa-angle-right');
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

    const main = (() => {
        const mainElement = document.createElement('main'); {
            const section = document.createElement('section'); {
                const h3 = document.createElement('h3');
                h3.textContent = 'The Old Sailor';
                section.appendChild(h3);
                const p = document.createElement('p');
                p.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione nemo corporis, mollitia
            ipsum, recusandae incidunt blanditiis quod velit consectetur, facere eius eos sequi? Accusantium
            quae doloribus illum consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            repellendus maiores soluta veniam ab. Minima atque praesentium molestiae dolor non ipsa delectus
            doloribus animi eligendi. Incidunt, amet. Reprehenderit, iste quaerat? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Velit, omnis illum, accusantium iste iusto totam sit nulla obcaecati
            rerum animi aut numquam delectus distinctio consectetur odit perferendis, ea ad eos?Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Unde aliquam et quisquam hic nemo, tempore omnis eos?
            Ad saepe blanditiis ut eum magni doloremque ab harum debitis? Nisi, sunt commodi! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Fuga consequatur ipsum incidunt fugit quos maxime est aut
            dolor mollitia sed asperiores molestiae, laborum odit eaque ut. In cum reprehenderit quasi. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam commodi quibusdam numquam, deserunt
            similique nobis impedit? Quia laborum sit alias debitis voluptates rem officiis ullam? Commodi
            impedit fugit beatae voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, nemo. Quod officiis, facilis quisquam labore deserunt iusto quas odio numquam
            consequuntur temporibus quaerat neque harum eos cumque saepe, maxime ut.`;
                section.appendChild(p);
            }
            mainElement.appendChild(section);
        }
        contentElement.appendChild(mainElement);
    })();

    const footer = (() => {
        const footerElement = document.createElement('footer'); {
            const button = document.createElement('button');
            button.textContent = `9W 23rd St`;
            footerElement.appendChild(button);
        }
        contentElement.appendChild(footerElement);
    })();

})();

export {
    content
};