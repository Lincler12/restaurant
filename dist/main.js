(()=>{"use strict";(()=>{const e=document.getElementById("modal-content"),n=document.getElementById("modal"),t=document.getElementById("modal-toggle-btn");t.addEventListener("click",(function(){n.classList.toggle("modal-toggle"),e.classList.toggle("modal-toggle-content")})),t.addEventListener("click",(function(){t.classList.toggle("change")}))})(),(()=>{const e=document.getElementById("page-header"),n=document.getElementById("previous"),t=document.getElementById("next"),s=document.getElementById("stop"),l=document.createElement("img");let a,o=0,c=!0,g=!0,i=["url('images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg')","url('images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg')","url('images/brooke-lark-1Rm9GLHV0UA-unsplash.jpg')","url('images/brooke-lark-M4E7X3z80PQ-unsplash.jpg')","url('images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg')","url('images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg')","url('images/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg')"];const d="https://img.icons8.com/windows/32/000000/pause--v1.png";l.src=d,s.appendChild(l);const m=()=>{g&&(o++,7===o&&(o=0),e.style.backgroundImage=i[o],g=!1,setTimeout((function(){g=!0}),1500))};function u(){a=setInterval(m,1e4)}u(),n.addEventListener("click",(()=>{g&&(o--,o<0&&(o=6),e.style.backgroundImage=i[o],g=!1,setTimeout((function(){g=!0}),2e3))})),t.addEventListener("click",m),s.addEventListener("click",(function(){c?(l.src="https://img.icons8.com/android/24/000000/play.png",c=!1,clearInterval(a)):(l.src=d,c=!0,u())}))})()})();