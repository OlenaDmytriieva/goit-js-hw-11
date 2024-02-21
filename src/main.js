import { queryPixabay } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = form.querySelector('input').value.trim();

  if (query) {
    loaderElement.style.display = 'block';

    queryPixabay(query)
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
          createGallery(images);
        }
        loaderElement.style.display = 'none';
      })
      .catch(error => {
        console.error('Error:', error);
        loaderElement.style.display = 'none';
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
  }
});
