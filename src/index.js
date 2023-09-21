import { searchForImages, loadMoreImages } from './handlers.js';
import axios from 'axios';
const searchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
searchForm.addEventListener('submit', searchForImages);

loadMoreImages();
loadMoreBtn.addEventListener('click', loadMoreImages);
