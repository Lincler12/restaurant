const about = (() => {
    const load = () => {
        const section = document.createElement('section');
        section.classList.add('about');
        {
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
        return section;
    }

    return {
        load,
    }

})();

export {
  about
};