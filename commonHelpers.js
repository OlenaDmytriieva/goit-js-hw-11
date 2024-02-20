import{i as n,S as u}from"./assets/vendor-7659544d.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(o){const a=o.map(t=>`<li class="gallery-item">
                        <div class="box">
                          <a class="gallery-link" href="${t.largeImageURL}">
                            <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" data-likes="${t.likes}" data-views="${t.views}" data-comments="${t.comments}" data-downloads="${t.downloads}"/>
                            <div class="img-card">
                              <div class="img-data">
        <h4 class="data-title">Likes</h4>
        <p class="data-value">
          ${t.likes}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Views</h4>
        <p class="data-value">
          ${t.views}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Comments</h4>
        <p class="data-value">
          ${t.comments}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Downloads</h4>
        <p class="data-value">
          ${t.downloads}
        </p>
      </div>
                            </div>
                          </a>
                        </div>
                      </li>`).join(`
`);d.innerHTML=a}const c=document.querySelector(".search-form"),l=document.querySelector(".loader");let d;c.addEventListener("submit",o=>{o.preventDefault();const a=c.querySelector("input").value.trim();l.style.display="block";let t=setInterval(()=>{},1e3);a?fetch(`https://pixabay.com/api/?key=42368868-12588a31d2c2b3196976be5e8&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error("Network response is not ok");return s.json()}).then(s=>{const e=s.hits;if(e.length===0)n.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",theme:"dark",timeout:5e3});else{d=document.querySelector(".gallery"),m(e);let r=new u(".gallery a",{captionDelay:250,captionsData:"alt"});r.on("show.simplelightbox",function(){}),r.refresh()}l.style.display="none",clearInterval(t)}).catch(s=>{console.error("Error:",s),l.style.display="none",clearInterval(t)}):(n.warning({title:"Caution",titleColor:"#FFF",messageColor:"#FFF",message:"This input field cannot be empty. Please enter your request!",backgroundColor:"#FFA000",position:"topRight",theme:"dark",timeout:5e3}),l.style.display="none",clearInterval(t))});
//# sourceMappingURL=commonHelpers.js.map
