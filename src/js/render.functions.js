export function renderImages(images, container) {
  container.innerHTML = images.map(img => `
    <div class="photo-card">
      <img src="${img.webformatURL}" alt="${img.tags}">
      <p>Likes: ${img.likes} | Views: ${img.views}</p>
    </div>
  `).join('');
}
