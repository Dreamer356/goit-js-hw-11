import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render.functions.js';
import Notiflix from 'notiflix';

const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  currentQuery = document.getElementById('search-query').value.trim();
  currentPage = 1;
  if (!currentQuery) return;

  const images = await fetchImages(currentQuery, currentPage);

  if (images.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again!');
    gallery.innerHTML = ''; // Очистить предыдущие изображения, если есть
    return;
  }

  renderImages(images, gallery);
});

// Пример для кнопки "Load More" (если нужно)
gallery.addEventListener('scroll', async () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    currentPage++;
    const images = await fetchImages(currentQuery, currentPage);
    renderImages([...document.querySelectorAll('.photo-card')].map(c => ({
      webformatURL: c.querySelector('img').src,
      tags: c.querySelector('img').alt,
      likes: parseInt(c.querySelector('p').textContent.split('|')[0].split(':')[1]),
      views: parseInt(c.querySelector('p').textContent.split('|')[1].split(':')[1])
    })), gallery);
    renderImages(images, gallery);
  }
});
