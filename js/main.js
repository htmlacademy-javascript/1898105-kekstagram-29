import './form.js';
import { showAlert } from './util.js';
import { renderGallery } from './renderGallery.js';
import { getData } from './data.js';
import { init as initFilter, getSortPictures } from './sort.js';

try {
  const data = await getData();
  initFilter(data);
  renderGallery(getSortPictures());
} catch (err) {
  showAlert(err.message, 'red');
}
