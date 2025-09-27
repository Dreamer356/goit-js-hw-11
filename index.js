import{a as u,S as f}from"./assets/vendor-CMrHvDOW.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",m="52417651-378a9ae18bca7d74fedb43ebe";async function g(a,r=1,o=12){const n=`${p}?key=${m}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`;try{return(await u.get(n)).data.hits||[]}catch(e){return console.error("Pixabay fetch error:",e),[]}}let i;const d=document.querySelector(".loader");function y(a){a.innerHTML=""}function h(){d.classList.remove("loader-hidden")}function b(){d.classList.add("loader-hidden")}function L(a,r,o=!0){const n=a.map(e=>`
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
    `).join("");o?r.innerHTML=n:r.insertAdjacentHTML("beforeend",n),i?i.refresh():i=new f(".gallery a",{captionsData:"alt",captionDelay:250})}const c=document.querySelector(".form"),l=document.querySelector(".gallery");c.addEventListener("submit",async a=>{a.preventDefault();const r=c.elements["search-text"].value.trim();if(!r){iziToast.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}y(l),h();try{const o=await g(r);if(o.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o,l,!0)}catch(o){iziToast.error({title:"Error",message:"Sorry, something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{b()}});
//# sourceMappingURL=index.js.map
