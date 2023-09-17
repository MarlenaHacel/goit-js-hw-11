import pingPixabay from './gallery-api';
const imageContainer = document.querySelector('.gallery');
const getImageElement = image => {
  const imageElementHTML = image.map(item => {
    return `
  <div class="photo-card">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      <div class="info">
          <p class="info-item"><b>Lubię to:</b> ${image.likes}</p>
          <p class="info-item"><b>Wyświetlenia:</b> ${image.views}</p>
          <p class="info-item"><b>Komentarze:</b> ${image.comments}</p>
          <p class="info-item"><b>Pobrania:</b> ${image.downloads}</p>
      </div>
  </div>
`;
  });

  imageContainer.innerHTML = imageElementHTML.join('');
};
function drawImages({ images, page }) {
  if (page === '1') {
    // imageContainer.innerHTML = '';
  }
  const children = images.map(getImageElement);
  imageContainer.append(...children);
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
