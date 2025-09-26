export function renderImages(images, container) {
  container.innerHTML = images.map(img => `
    <li class="photo-card">
      <a href="${img.largeImageURL}" class="gallery-link">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: <b>${img.likes}</b></p>
        <p>Views: <b>${img.views}</b></p>
        <p>Comments: <b>${img.comments}</b></p>
        <p>Downloads: <b>${img.downloads}</b></p>
      </div>
    </li>
  `).join('');
}

export function clearGallery(container) {
  container.innerHTML = '';
}

export function showLoader(loader) {
  loader.style.display = 'block';
}

export function hideLoader(loader) {
  loader.style.display = 'none';
}
