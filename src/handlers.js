import { loadImages } from './ui.js';
// const loadMoreBtn = document.querySelector('.load-more');
// loadMoreBtn.addEventListener('click', loadMoreImages);
let page = 1;
export async function searchForImages(e) {
  e.preventDefault();
  const searchQuery = e.target.searchQuery.value;
  // const page = '1';
  await loadImages({ searchQuery, page });
}

export async function scrollHandler() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    const searchForm = document.querySelector('.search-form');
    page += 1;
    const searchQuery = searchForm.querySelector(
      'input[name="searchQuery"]'
    ).value;
    await loadImages({ searchQuery, page: page + 1 });
  }
}
