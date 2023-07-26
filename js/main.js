import './form.js';
import { showAlert } from './util.js';
import { renderGallery } from './renderGallery.js';
import { getData } from './data.js';
import { init as initFilter, getSortPictures } from './sort.js';

getData()
  .then((pictures) => {
    initFilter(pictures);
    renderGallery(getSortPictures());
  })
  .catch(
    (err) => {
      showAlert(err.message, 'red');
    }
  );
