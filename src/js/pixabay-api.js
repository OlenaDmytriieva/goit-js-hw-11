'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');
let myGallery;

form.addEventListener('submit', e => {
  e.preventDefault();
  const request = form.querySelector('input').value.trim();

  loaderElement.style.display = 'block';
  let loadingInterval = setInterval(() => {}, 1000);

  if (request) {
    fetch(
      `https://pixabay.com/api/?key=42368868-12588a31d2c2b3196976be5e8&q=${request}&image_type=photo&orientation=horizontal&safesearch=true`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response is not ok');
        }
        return response.json();
      })
      .then(data => {
        const images = data.hits;
        if (images.length === 0) {
          iziToast.error({
            title: 'Error',
            titleColor: '#FFF',
            messageColor: '#FFF',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#EF4040',
            position: 'topRight',
            theme: 'dark',
            timeout: 5000,
          });
        } else {
          myGallery = document.querySelector('.gallery');

          createGallery(images);

          let gallery = new SimpleLightbox('.gallery a', {
            captionDelay: 250,
            captionsData: 'alt',
          });

          gallery.on('show.simplelightbox', function () {});
          gallery.refresh();
        }
        loaderElement.style.display = 'none';
        clearInterval(loadingInterval);
      })
      .catch(error => {
        console.error('Error:', error);
        loaderElement.style.display = 'none';
        clearInterval(loadingInterval);
      });
  } else {
    iziToast.warning({
      title: 'Caution',
      titleColor: '#FFF',
      messageColor: '#FFF',
      message: 'This input field cannot be empty. Please enter your request!',
      backgroundColor: '#FFA000',
      position: 'topRight',
      theme: 'dark',
      timeout: 5000,
    });
    loaderElement.style.display = 'none';
    clearInterval(loadingInterval);
  }
});

function createGallery(images) {
  const result = images
    .map(image => {
      return `<li class="gallery-item">
                        <div class="box">
                          <a class="gallery-link" href="${image.largeImageURL}">
                            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" data-likes="${image.likes}" data-views="${image.views}" data-comments="${image.comments}" data-downloads="${image.downloads}"/>
                            <div class="img-card">
                              <div class="img-data">
        <h4 class="data-title">Likes</h4>
        <p class="data-value">
          ${image.likes}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Views</h4>
        <p class="data-value">
          ${image.views}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Comments</h4>
        <p class="data-value">
          ${image.comments}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Downloads</h4>
        <p class="data-value">
          ${image.downloads}
        </p>
      </div>
                            </div>
                          </a>
                        </div>
                      </li>`;
    })
    .join('\n');

  myGallery.innerHTML = result;
}
