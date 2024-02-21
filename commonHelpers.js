import{S as d,i as n}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(a){return fetch(`https://pixabay.com/api/?key=42368868-12588a31d2c2b3196976be5e8&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("Network response is not ok");return t.json()})}function m(a){const t=document.querySelector(".gallery"),s=a.map(e=>`<li class="gallery-item">
                        <div class="box">
                          <a class="gallery-link" href="${e.largeImageURL}">
                            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" data-likes="${e.likes}" data-views="${e.views}" data-comments="${e.comments}" data-downloads="${e.downloads}"/>
                            <div class="img-card">
                              <div class="img-data">
        <h4 class="data-title">Likes</h4>
        <p class="data-value">
          ${e.likes}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Views</h4>
        <p class="data-value">
          ${e.views}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Comments</h4>
        <p class="data-value">
          ${e.comments}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Downloads</h4>
        <p class="data-value">
          ${e.downloads}
        </p>
      </div>
                            </div>
                          </a>
                        </div>
                      </li>`).join(`
`);t.innerHTML=s;let o=new d(".gallery a",{captionDelay:250,captionsData:"alt"});o.on("show.simplelightbox",function(){}),o.refresh()}const c=document.querySelector(".search-form"),l=document.querySelector(".loader");c.addEventListener("submit",a=>{a.preventDefault();const t=c.querySelector("input").value.trim();t?(l.style.display="block",u(t).then(s=>{const o=s.hits;o.length===0?n.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",theme:"dark",timeout:5e3}):m(o),l.style.display="none"}).catch(s=>{console.error("Error:",s),l.style.display="none"})):(n.warning({title:"Caution",titleColor:"#FFF",messageColor:"#FFF",message:"This input field cannot be empty. Please enter your request!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",timeout:5e3}),l.style.display="none")});
//# sourceMappingURL=commonHelpers.js.map
