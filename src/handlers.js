import { loadImages } from './ui.js';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

let page = 1;

export async function searchForImages(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  const searchQuery = searchForm.querySelector(
    'input[name="searchQuery"]'
  ).value;
  await loadImages({ searchQuery, page: '1' });


export async function loadMoreImages() {
  page += 1;
  const searchQuery = searchForm.querySelector(
    'input[name="searchQuery"]'
  ).value;
  await loadImages({ searchQuery });
}
