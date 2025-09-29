import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");
const loader = document.querySelector(".loader");

let query = '';
let page = 1;
const PER_PAGE = 12;
let totalLoaded = 0;
let totalHits = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  query = form.elements["search-text"].value.trim();
  if (!query) {
    iziToast.warning({
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }
  page = 1;
  totalLoaded = 0;
  totalHits = 0;
  clearGallery(gallery);
  showLoader();
  loadMoreBtn.style.display = "none";

  try {
    const data = await fetchImages(query, page, PER_PAGE);
    const images = data.hits;
    totalHits = data.totalHits || 0;
    if (!images || images.length === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      hideLoader();
      return;
    }
    renderGallery(images, gallery, true);
    totalLoaded += images.length;
    if (totalLoaded < totalHits) {
      loadMoreBtn.style.display = "inline-block";
    }
  } catch (error) {
    iziToast.error({
      message: "Sorry, something went wrong. Please try again later.",
      position: "topRight",
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
  page++;
  showLoader();
  try {
    const data = await fetchImages(query, page, PER_PAGE);
    const images = data.hits;
    if (!images || images.length === 0) {
      iziToast.info({
        message: "You've reached the end of the results.",
        position: "topRight",
      });
      loadMoreBtn.style.display = "none";
      hideLoader();
      return;
    }
    renderGallery(images, gallery, false);
    totalLoaded += images.length;
    if (totalLoaded >= totalHits) {
      iziToast.info({
        message: "You've reached the end of the results.",
        position: "topRight",
      });
      loadMoreBtn.style.display = "none";
    }

    const firstCard = gallery.firstElementChild;
    if (firstCard) {
      const { height: cardHeight } = firstCard.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      message: "Could not load more images.",
      position: "topRight",
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});
