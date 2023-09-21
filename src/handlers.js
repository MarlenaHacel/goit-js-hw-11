import { loadImages } from './ui.js';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

let page = 1;

export async function searchForImages(e) {
  e.preventDefault();
<<<<<<< HEAD
  gallery.innerHTML = '';
  const searchQuery = searchForm.querySelector(
    'input[name="searchQuery"]'
  ).value;
  await loadImages({ searchQuery, page: '1' });
=======
  const searchQuery = e.target.searchQuery.value;
  // const page = '1';
  await loadImages({ searchQuery, page });
>>>>>>> 1f1c5c736bda6acf3649f8a309f18e47dc08f7d3
}

export async function loadMoreImages() {
  page += 1;
  const searchQuery = searchForm.querySelector(
    'input[name="searchQuery"]'
  ).value;
  await loadImages({ searchQuery });
}
