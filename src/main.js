import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchQuery = form.elements["search-text"].value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

  clearGallery(gallery);
  showLoader();

  try {
    const images = await fetchImages(searchQuery);

    if (images.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    renderGallery(images, gallery, true);
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Sorry, something went wrong. Please try again later.",
      position: "topRight",
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});
