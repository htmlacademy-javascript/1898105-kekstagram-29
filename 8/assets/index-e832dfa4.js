(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const i=(t,e)=>Math.floor(Math.random()*(e-t+1))+t;function _(t,e){return t.length<=e}_("проверяемая строка",20);function S(t){const e=t.replaceAll(" ","").toLowerCase();let r="";for(let c=e.length-1;c>=0;c--)r+=e.at([c]);return e===r}S("Лёша на полке клопа нашёл ");function q(t){const e=t.toString();let r="";for(let c=0;c<e.length;c++)Number.isNaN(parseInt(e[c],10))||(r+=e[c]);return parseInt(r,10)}q("ECMAScript 2022");const L=t=>t.key==="Escape",v=25,M=125,a=["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"],m={MIN:15,MAX:200},d={MIN:1,MAX:1e6},p={MIN:1,MAX:6},g=["Иван","Андрей","Мария","Николай","Елена","Ольга","Фигаро"],f=["Описание 1","Описание 2","Описание 3","Описание 4","Описание 5"],N=()=>{const t=[];for(let e=1;e<i(0,M);e++)t.push({id:i(d.MIN,d.MAX),avatar:`img/avatar-${i(p.MIN,p.MAX)}.svg`,message:a[i(0,a.length-1)],name:g[i(0,g.length-1)]});return t},P=t=>({id:t,url:`photos/${t}.jpg`,description:f[i(0,f.length-1)],likes:i(m.MIN,m.MAX),comments:N()}),b=()=>{const t=[];for(let e=1;e<=v;e++)t.push(P(e));return t},E=document.querySelector(".social__comments"),I=document.querySelector("#comment").content.querySelector(".social__comment"),y=t=>{const e=document.createDocumentFragment();t.forEach(r=>{const c=I.cloneNode(!0),o=c.querySelector(".social__picture");o.src=r.avatar,o.alt=r.name,c.querySelector(".social__text").textContent=r.message,e.append(c)}),E.append(e)},u=document.querySelector(".big-picture"),k=document.querySelector(".big-picture__img"),x=k.querySelector("img"),A=document.querySelector(".social__caption"),O=document.querySelector(".likes-count"),X=document.querySelector(".big-picture__cancel"),$=document.querySelector(".comments-count"),l=document.querySelector(".comments-loader"),h=document.querySelector(".social__comment-count"),w=()=>{u.classList.add("hidden"),document.querySelector(".social__comments").textContent="",document.body.classList.remove("modal-open")},B=t=>{L(t)&&(t.preventDefault(),u.classList.add("hidden"),document.querySelector(".social__comments").textContent="",document.body.classList.remove("modal-open"))},D=t=>{l.classList.remove("hidden");let e=5;const{url:r,likes:c,comments:o,description:n}=t;o.length<=e&&(e=o.length,l.classList.add("hidden")),h.textContent=`${e} из ${o.length} комментариев`,u.classList.remove("hidden"),document.body.classList.add("modal-open"),x.src=r,A.textContent=n,O.textContent=c,$.textContent=o.length,y(o.slice(0,e));const s=()=>{l.classList.remove("hidden"),document.querySelector(".social__comments").textContent="",e=e+5,e>=o.length&&(e=o.length,l.classList.add("hidden")),y(o.slice(0,e)),h.textContent=`${e} из ${o.length} комментариев`};l.addEventListener("click",s),X.addEventListener("click",w),document.addEventListener("keydown",B)},T=document.querySelector(".pictures"),F=document.querySelector("#picture").content,K=F.querySelector("a"),U=t=>{const{url:e,likes:r,comments:c,description:o}=t,n=K.cloneNode(!0);n.querySelector(".picture__img").src=e,n.querySelector(".picture__img").alt=o,n.querySelector(".picture__comments").textContent=c.length,n.querySelector(".picture__likes").textContent=r;const s=C=>{C.preventDefault(),D(t)};return n.addEventListener("click",s),n},j=t=>{const e=document.createDocumentFragment();t.forEach(r=>{e.append(U(r))}),T.append(e)};j(b());
