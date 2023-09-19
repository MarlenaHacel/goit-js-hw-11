import pingPixabay from './gallery-api';

const getImageElement = image => {
  return `
  <div class="photo-card">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      <div class="info">
          <p class="info-item"><b>Lubię to:</b> ${image.likes}</p>
          <p class="info-item"><b>Wyświetlenia:</b> ${image.views}</p>
          <p class="info-item"><b>Komentarze:</b> ${image.comments}</p>
          <p class="info-item"><b>Pobrania:</b> ${image.downloads}</p>
      </div>
  </div>`;
};
function drawImages({ images, page }) {
  const imageContainer = document.querySelector('.gallery');
  if (page === '1') {
    imageContainer.innerHTML = '';
  }
  const children = images.map(getImageElement);
  imageContainer.innerHTML += children.join('');
}
export async function loadImages({ searchQuery, page }) {
  const images = await pingPixabay({ searchQuery, page });
  if (images.error) {
    alert(images.error);
    return;
  }
  drawImages({ images, page });
  return;
}
