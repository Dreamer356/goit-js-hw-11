import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader, clearGallery } from './js/render-functions.js';

let lightbox;

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = document.getElementById('search-query').value.trim();
  if (!query) return;

  showLoader(loader);
  clearGallery(gallery);

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
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
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Something went wrong. Please try again!',
      position: 'topRight'
    });
  } finally {
    hideLoader(loader);
  }
});
