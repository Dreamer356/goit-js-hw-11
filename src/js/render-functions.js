import SimpleLightbox from "simplelightbox";

let lightbox;
const loader = document.querySelector(".loader");

export function clearGallery(gallery) {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("loader-hidden");
}

export function hideLoader() {
  loader.classList.add("loader-hidden");
}

export function renderGallery(images, gallery, replace = true) {
  const markup = images
    .map(
      (hit) => `
      <li class="gallery-item">
        <a href="${hit.largeImageURL}">
          <img src="${hit.webformatURL}" alt="${hit.tags.replace(/"/g, "&quot;")}" width="300" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${hit.likes}</p>
          <p><b>Views:</b> ${hit.views}</p>
          <p><b>Comments:</b> ${hit.comments}</p>
          <p><b>Downloads:</b> ${hit.downloads}</p>
        </div>
      </li>
    `
    )
    .join("");

  if (replace) {
    gallery.innerHTML = markup;
  } else {
    gallery.insertAdjacentHTML("beforeend", markup);
  }

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  }
}
