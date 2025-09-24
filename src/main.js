import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render.functions.js';

let lightbox;

const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = document.getElementById('search-query').value.trim();

  if (!query) return;

  const images = await fetchImages(query);

  if (images.length === 0) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight'
    });
    gallery.innerHTML = '';
    if (lightbox) {
      lightbox.destroy();
      lightbox = null;
    }
    return;
  }

  renderImages(images, gallery);

  if (lightbox) {
    lightbox.destroy();
  }

  lightbox = new SimpleLightbox('.gallery a.gallery-link', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
});
