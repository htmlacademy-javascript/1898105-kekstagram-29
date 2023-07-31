import './form.js';
import { showAlert } from './util.js';
import { renderGallery } from './renderGallery.js';
import { getData } from './data.js';
import { init as initFilter } from './sort.js';

getData()
  .then((pictures) => {
    initFilter(pictures);
    renderGallery(pictures);
  })
  .catch(
    (err) => {
      showAlert(err.message, 'red');
    }
  );
