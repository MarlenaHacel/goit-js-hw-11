const e={key:"39384649-848b8f3f94b47c16df36e9a5c",per_page:"40",image_type:"photo",orientation:"horizontal",safesearch:"true"};async function a({searchQuery:a="",page:t="1"}){try{const n=new URLSearchParams({...e,page:t,q:a}),r=await fetch(`https://pixabay.com/api?${n}`);if(!r.ok){if(400===r.status)return;return{error:r.status}}const{hits:o}=await r.json();return o}catch(e){return{error:e.toString()}}}const t=e=>`\n  <div class="photo-card">\n      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />\n      <div class="info">\n          <p class="info-item"><b>Lubię to:</b> ${e.likes}</p>\n          <p class="info-item"><b>Wyświetlenia:</b> ${e.views}</p>\n          <p class="info-item"><b>Komentarze:</b> ${e.comments}</p>\n          <p class="info-item"><b>Pobrania:</b> ${e.downloads}</p>\n      </div>\n  </div>`;async function n({searchQuery:e,page:n}){const r=await a({searchQuery:e,page:n});r.error?alert(r.error):function({images:e,page:a}){"1"===a&&(document.querySelector(".gallery").innerHTML="");const n=e.map(t);imageContainer.append(...n)}({images:r,page:n})}async function r(){const{scrollTop:e,scrollHeight:a,clientHeight:t}=document.documentElement;if(e+t>=a){const e=document.querySelector("#searchPhotosForm"),a=parseInt(e.page.value);e.page.value=a+1,await loadPhotos({q:e.q.value,page:e.page.value})}}const o=document.querySelector("#search-form");o.addEventListener("submit",(async function(e){e.preventDefault(),e.target.page.value="1",e.target.searchQuery.value,await n({searchQuery:searchQuery,page:"1"})})),o.dispatchEvent(new Event("submit")),r(),window.addEventListener("scroll",r);
//# sourceMappingURL=index.566d5b3d.js.map
