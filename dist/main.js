(()=>{"use strict";var e={218:(e,t,n)=>{e.exports=n.p+"e808f12c63adcd0139d6.jpg"},191:(e,t,n)=>{e.exports=n.p+"ac9d8bd2672c91233b23.jpg"},78:(e,t,n)=>{e.exports=n.p+"615112097b69053fb963.jpg"},193:(e,t,n)=>{e.exports=n.p+"f561d10e89896215a359.jpg"},221:(e,t,n)=>{e.exports=n.p+"c6051ba841be59bd0a3f.jpg"},42:(e,t,n)=>{e.exports=n.p+"dcffc4f239d261b67510.jpg"},377:(e,t,n)=>{e.exports=n.p+"4110222ed96379e04bc1.jpg"}},t={};function n(c){if(t[c])return t[c].exports;var r=t[c]={exports:{}};return e[c](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var c=t.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{(()=>{const e=document.getElementById("modal-content"),t=document.getElementById("modal"),n=document.getElementById("modal-toggle-btn");n.addEventListener("click",(function(){t.classList.toggle("modal-toggle"),e.classList.toggle("modal-toggle-content")})),n.addEventListener("click",(function(){n.classList.toggle("change")}))})();var e=n(218),t=n(191),c=n(78),r=n(193),o=n(221),s=n(42),i=n(377);(()=>{const n=document.getElementById("page-header"),l=document.getElementById("previous"),d=document.getElementById("next"),a=document.getElementById("stop"),p=document.createElement("img");let g,u=0,m=!0,f=!0,b=[`url(${e})`,`url(${t})`,`url(${c})`,`url(${r})`,`url(${o})`,`url(${s})`,`url(${i})'`];const h="https://img.icons8.com/windows/32/000000/pause--v1.png";p.src=h,a.appendChild(p);const v=()=>{f&&(u++,7===u&&(u=0),n.style.backgroundImage=b[u],f=!1,setTimeout((function(){f=!0}),1500))};function E(){g=setInterval(v,1e4)}E(),l.addEventListener("click",(()=>{f&&(u--,u<0&&(u=6),n.style.backgroundImage=b[u],f=!1,setTimeout((function(){f=!0}),2e3))})),d.addEventListener("click",v),a.addEventListener("click",(function(){m?(p.src="https://img.icons8.com/android/24/000000/play.png",m=!1,clearInterval(g)):(p.src=h,m=!0,E())}))})()})()})();