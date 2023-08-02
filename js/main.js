import './form.js';
import { showAlert } from './util.js';
import { renderGallery } from './renderGallery.js';
import { getData } from './data.js';
import { initialize as initializeFilter } from './sort.js';

getData()
  .then((pictures) => {
    initializeFilter(pictures);
    renderGallery(pictures);
  })
  .catch(
    (err) => {
      showAlert(err.message, 'red');
    }
  );
