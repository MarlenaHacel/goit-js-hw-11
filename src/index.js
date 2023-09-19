import { searchForImages, scrollHandler } from './handlers.js';
import axios from 'axios';
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', searchForImages);
searchForm.dispatchEvent(new Event('submit'));

// scrollHandler();
// window.addEventListener('scroll', scrollHandler);
