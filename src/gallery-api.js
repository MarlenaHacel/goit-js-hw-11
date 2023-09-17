import { apiPath, defaultPixabayParams } from './config';
import axios from 'axios';
export default async function pingPixabay({ searchQuery = '', page = '1' }) {
  try {
    const queryString = new URLSearchParams({
      ...defaultPixabayParams,
      page,
      q: searchQuery,
    });
    const response = await fetch(`${apiPath}?${queryString}`);
    if (!response.ok) {
      if (response.status === 400) {
        return;
      }
      return { error: response.status };
    }
    const { hits: images } = await response.json();
    return images;
  } catch (e) {
    return { error: e.toString() };
  }
}
