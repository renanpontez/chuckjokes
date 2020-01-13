import axios from 'axios';
const API_URL = `https://api.chucknorris.io/jokes`;

//get categories
export function getCategories() {
  const ENDPOINT_URL = [API_URL, '/categories'].join('');
  return axios.get(ENDPOINT_URL).catch(e => { return null });
}

//get one joke
export function getRandomJoke(categoryId) {
  const ENDPOINT_URL = [API_URL, `/random?category=${categoryId}`].join('');
  return axios.get(ENDPOINT_URL).catch(e => { return null });
}
