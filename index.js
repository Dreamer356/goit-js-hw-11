import{a as d,S as m}from"./assets/vendor-CMrHvDOW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/",p="52417651-378a9ae18bca7d74fedb43ebe";async function g(a,t=1,r=12){const n=`${f}?key=${p}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${r}`;try{return(await d.get(n)).data.hits||[]}catch(e){return console.error("Pixabay fetch error:",e),[]}}let i;const u=document.querySelector(".loader");function y(a){a.innerHTML=""}function h(){u.classList.remove("loader-hidden")}function b(){u.classList.add("loader-hidden")}function L(a,t,r=!0){const n=a.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags.replace(/"/g,"&quot;")}" width="300" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");r?t.innerHTML=n:t.insertAdjacentHTML("beforeend",n),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})}const c=document.querySelector(".form"),l=document.querySelector(".gallery");c.addEventListener("submit",async a=>{a.preventDefault();const t=c.elements["search-text"].value.trim();if(!t){iziToast.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}h(),await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))),y(l);try{const r=await g(t);if(!r||r.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r,l,!0)}catch(r){iziToast.error({title:"Error",message:"Sorry, something went wrong. Please try again later.",position:"topRight"}),console.error(r)}finally{b()}});
//# sourceMappingURL=index.js.map
