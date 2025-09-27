import{a as u}from"./assets/vendor-CWxt7QI6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="52417651-378a9ae18bca7d74fedb43ebe",p="https://pixabay.com/api/";async function f(t,n=1,r=12){const s=`${p}?key=${d}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${r}`;try{return(await u.get(s)).data.hits||[]}catch(e){return console.error("Pixabay fetch error:",e),[]}}function y(t,n){n.innerHTML=t.map(r=>`
    <li class="photo-card">
      <a href="${r.largeImageURL}" class="gallery-link">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: <b>${r.likes}</b></p>
        <p>Views: <b>${r.views}</b></p>
        <p>Comments: <b>${r.comments}</b></p>
        <p>Downloads: <b>${r.downloads}</b></p>
      </div>
    </li>
  `).join("")}function m(t){t.innerHTML=""}function g(t){t.style.display="block"}function h(t){t.style.display="none"}let a;const b=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");b.addEventListener("submit",async t=>{t.preventDefault();const n=document.getElementById("search-query").value.trim();if(n){g(l),m(c);try{const r=await f(n);if(r.length===0){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a&&(a.destroy(),a=null);return}y(r,c),a&&a.destroy(),a=new SimpleLightbox(".gallery a.gallery-link",{captions:!0,captionsData:"alt",captionDelay:250})}catch(r){console.error(r),iziToast.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{h(l)}}});
//# sourceMappingURL=index.js.map
