(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=c(n);fetch(n.href,o)}})();const s=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;function y(e,t){return e.length<=t}y("проверяемая строка",20);function h(e){const t=e.replaceAll(" ","").toLowerCase();let c="";for(let r=t.length-1;r>=0;r--)c+=t.at([r]);return t===c}h("Лёша на полке клопа нашёл ");function C(e){const t=e.toString();let c="";for(let r=0;r<t.length;r++)Number.isNaN(parseInt(t[r],10))||(c+=t[r]);return parseInt(c,10)}C("ECMAScript 2022");const M=e=>e.key==="Escape",S=25,N=30,u=["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"],a={MIN:15,MAX:200},d={MIN:1,MAX:1e6},m={MIN:1,MAX:6},p=["Иван","Андрей","Мария","Николай","Елена","Ольга","Фигаро"],g=["Описание 1","Описание 2","Описание 3","Описание 4","Описание 5"],_=()=>({id:s(d.MIN,d.MAX),avatar:`img/avatar-${s(m.MIN,m.MAX)}.svg`,message:u[s(0,u.length-1)],name:p[s(0,p.length-1)]}),L=e=>({id:e,url:`photos/${e}.jpg`,description:g[s(0,g.length-1)],likes:s(a.MIN,a.MAX),comments:Array.from({length:s(0,N)},_)}),P=()=>{const e=[];for(let t=1;t<=S;t++)e.push(L(t));return e},l=document.querySelector(".big-picture"),b=document.querySelector(".big-picture__img"),q=b.querySelector("img"),v=document.querySelector(".social__caption"),E=document.querySelector(".social__likes"),I=document.querySelector(".big-picture__cancel"),A=()=>{l.classList.add("hidden"),document.body.classList.remove("modal-open")},O=e=>{M(e)&&(e.preventDefault(),l.classList.add("hidden"),document.body.classList.remove("modal-open"))},k=e=>{const{url:t,likes:c,description:r}=e;l.classList.remove("hidden"),document.body.classList.add("modal-open"),q.src=t,v.textContent=r,E.textContent=c,I.addEventListener("click",A),document.addEventListener("keydown",O)},X=document.querySelector(".pictures"),w=document.querySelector("#picture").content,x=w.querySelector("a"),B=e=>{const{url:t,likes:c,comments:r,description:n}=e,o=x.cloneNode(!0);o.querySelector(".picture__img").src=t,o.querySelector(".picture__img").alt=n,o.querySelector(".picture__comments").textContent=r.length,o.querySelector(".picture__likes").textContent=c;const i=f=>{f.preventDefault(),k(e)};return o.addEventListener("click",i),o},D=e=>{const t=document.createDocumentFragment();e.forEach(c=>{t.append(B(c))}),X.append(t)};D(P());