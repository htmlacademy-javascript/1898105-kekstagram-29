(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(c){if(c.ep)return;c.ep=!0;const o=r(c);fetch(c.href,o)}})();const i=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;function C(e,t){return e.length<=t}C("проверяемая строка",20);function _(e){const t=e.replaceAll(" ","").toLowerCase();let r="";for(let n=t.length-1;n>=0;n--)r+=t.at([n]);return t===r}_("Лёша на полке клопа нашёл ");function S(e){const t=e.toString();let r="";for(let n=0;n<t.length;n++)Number.isNaN(parseInt(t[n],10))||(r+=t[n]);return parseInt(r,10)}S("ECMAScript 2022");const q=e=>e.key==="Escape",L=25,M=125,u=["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"],m={MIN:15,MAX:200},a={MIN:1,MAX:1e6},d={MIN:1,MAX:6},p=["Иван","Андрей","Мария","Николай","Елена","Ольга","Фигаро"],g=["Описание 1","Описание 2","Описание 3","Описание 4","Описание 5"],N=()=>{const e=[];for(let t=1;t<i(0,M);t++)e.push({id:i(a.MIN,a.MAX),avatar:`img/avatar-${i(d.MIN,d.MAX)}.svg`,message:u[i(0,u.length-1)],name:p[i(0,p.length-1)]});return e},P=e=>({id:e,url:`photos/${e}.jpg`,description:g[i(0,g.length-1)],likes:i(m.MIN,m.MAX),comments:N()}),v=()=>{const e=[];for(let t=1;t<=L;t++)e.push(P(t));return e},b=document.querySelector(".social__comments"),E=document.querySelector("#comment").content.querySelector(".social__comment"),f=e=>{const t=document.createDocumentFragment();e.forEach(r=>{const n=E.cloneNode(!0),c=n.querySelector(".social__picture");c.src=r.avatar,c.alt=r.name,n.querySelector(".social__text").textContent=r.message,t.append(n)}),b.append(t)},l=document.querySelector(".big-picture"),I=document.querySelector(".big-picture__img"),k=I.querySelector("img"),x=document.querySelector(".social__caption"),A=document.querySelector(".likes-count"),O=document.querySelector(".big-picture__cancel"),X=document.querySelector(".comments-count"),$=document.querySelector(".comments-loader"),y=document.querySelector(".social__comment-count"),w=()=>{l.classList.add("hidden"),document.querySelector(".social__comments").textContent="",document.body.classList.remove("modal-open")},B=e=>{q(e)&&(e.preventDefault(),l.classList.add("hidden"),document.querySelector(".social__comments").textContent="",document.body.classList.remove("modal-open"))},D=e=>{const{url:t,likes:r,comments:n,description:c}=e;let o=5;n.length<o&&(o=n.length),y.textContent=`${o} из ${n.length} комментариев`,l.classList.remove("hidden"),document.body.classList.add("modal-open"),k.src=t,x.textContent=c,A.textContent=r,X.textContent=n.length,f(n.slice(0,o));const s=()=>{document.querySelector(".social__comments").textContent="",o=o+5,o>=n.length&&(o=n.length),f(n.slice(0,o)),y.textContent=`${o} из ${n.length} комментариев`};$.addEventListener("click",s),O.addEventListener("click",w),document.addEventListener("keydown",B)},T=document.querySelector(".pictures"),F=document.querySelector("#picture").content,K=F.querySelector("a"),U=e=>{const{url:t,likes:r,comments:n,description:c}=e,o=K.cloneNode(!0);o.querySelector(".picture__img").src=t,o.querySelector(".picture__img").alt=c,o.querySelector(".picture__comments").textContent=n.length,o.querySelector(".picture__likes").textContent=r;const s=h=>{h.preventDefault(),D(e)};return o.addEventListener("click",s),o},j=e=>{const t=document.createDocumentFragment();e.forEach(r=>{t.append(U(r))}),T.append(t)};j(v());
