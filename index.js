(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="52417651-378a9ae18bca7d74fedb43ebe",u="https://pixabay.com/api/";async function d(n,o=1,t=12){const s=`${u}?key=${l}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${t}`;try{const e=await fetch(s);if(!e.ok)throw new Error("Error fetching images");return(await e.json()).hits}catch(e){return console.error("Pixabay fetch error:",e),[]}}function f(n,o){o.innerHTML=n.map(t=>`
    <li class="photo-card">
      <a href="${t.largeImageURL}" class="gallery-link">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: <b>${t.likes}</b></p>
        <p>Views: <b>${t.views}</b></p>
        <p>Comments: <b>${t.comments}</b></p>
        <p>Downloads: <b>${t.downloads}</b></p>
      </div>
    </li>
  `).join("")}let a;const p=document.getElementById("search-form"),c=document.getElementById("gallery");p.addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("search-query").value.trim();if(!o)return;const t=await d(o);if(t.length===0){iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",a&&(a.destroy(),a=null);return}f(t,c),a&&a.destroy(),a=new SimpleLightbox(".gallery a.gallery-link",{captions:!0,captionsData:"alt",captionDelay:250})});
//# sourceMappingURL=index.js.map
