import axios from 'axios';

const API_KEY = '39913933-3bf78035f241350d58923393c';
const BASE_URL = 'https://pixabay.com/api/';
async function serviceGetQuestion(question, counter) {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${question}&image_type=photo&orientation=horizontal&safesearch=true&page=${counter}&per_page=40`
  );
  const data = response.data.hits;
  return response.data;
}
export { serviceGetQuestion };
