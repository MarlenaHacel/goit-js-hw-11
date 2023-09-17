import { loadImages } from './ui.js';

export async function searchForImages(e) {
  e.preventDefault();
  e.target.page.value = '1';
  const q = e.target.searchQuery.value;
  await loadImages({ searchQuery, page: '1' });
}

export async function scrollHandler() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // at the bottom of the page
  if (scrollTop + clientHeight >= scrollHeight) {
    const searchForm = document.querySelector('#searchPhotosForm');
    const page = parseInt(searchForm.page.value);
    searchForm.page.value = page + 1;
    await loadPhotos({ q: searchForm.q.value, page: searchForm.page.value });
  }
}
